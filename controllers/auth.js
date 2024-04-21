import userModel from '../models/user.js';
import { comparePassword, hashPassword } from '../utils/auth.js';
import JWT from 'jsonwebtoken';

// * REGISTRATION || METHOD : POST
//////////////////////////////////
export const registerController = async (req, res) => {
	try {
		const { userName, email, password, phone, address } = req.body;

		// * VALIDATIONS
		////////////////
		if (!userName) {
			return res.send({ error: 'Username is required' });
		}
		if (!email) {
			return res.send({ error: 'Email is required' });
		}
		if (!password) {
			return res.send({ error: 'Password is required' });
		}
		if (!phone) {
			return res.send({ error: 'Phone is required' });
		}
		if (!address) {
			return res.send({ error: 'Address is required' });
		}

		// * CHECKING USER
		//////////////////
		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			res.status(404).send({
				success: false,
				message: 'Already registered please login',
			});
		}

		// * REGISTER USER
		//////////////////
		const hashedPassword = await hashPassword(password);

		// * SAVING USER
		////////////////
		const user = await userModel({
			userName,
			email,
			password,
			phone,
			address,
			password: hashedPassword,
		}).save();

		res.status(201).send({
			success: true,
			message: 'Registration successful',
			user,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: 'Error while registration',
			error,
		});
	}
};

// * LOGIN || METHOD : POST
///////////////////////////
export const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;

		// * VALIDATIONS
		////////////////
		if (!email || !password) {
			res.status(404).send({
				success: false,
				message: 'Invalid email or password',
			});
		}

		// * CHECKING USER
		//////////////////
		const user = await userModel.findOne({ email });

		if (!user) {
			res.status(404).send({
				success: false,
				message: 'Email not registered',
			});
		}

		const match = await comparePassword(password, user.password);
		if (!match) {
			res.status(200).send({
				success: false,
				message: 'Password is incorrect',
			});
		}

		// * CREATING TOKEN
		///////////////////
		const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
			expiresIn: '7d',
		});

		res.status(200).send({
			success: true,
			message: 'Login successful',
			user: {
				userName: user.userName,
				email: user.email,
				phone: user.phone,
				address: user.address,
			},
			token,
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: 'Error while login',
			error,
		});
	}
};
