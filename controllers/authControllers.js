import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModal from '../models/user.js';
import JWT from 'jsonwebtoken';

// * REGISTRATION || METHOD : POST
//////////////////////////////////
export const registerController = async (req, res) => {
	try {
		const { username, email, password, phone, address } = req.body;

		// * VALIDATIONS
		////////////////
		if (!username) {
			return res.send({
				message: 'Name is required!',
			});
		}

		if (!email) {
			return res.send({
				message: 'Email is required!',
			});
		}

		if (!password) {
			return res.send({
				message: 'Password is required!',
			});
		}

		if (!phone) {
			return res.send({
				message: 'Phone is required!',
			});
		}

		if (!address) {
			return res.send({
				message: 'Address is required!',
			});
		}

		// * CHECKING USER
		//////////////////
		const existingUser = await userModal.findOne({ email });

		// * EXISTING USER
		//////////////////
		if (existingUser) {
			res.status(200).send({
				success: false,
				message: 'Already Registered please login',
			});
		}

		// * REGISTER
		/////////////
		const hashedPassword = await hashPassword(password);

		// * SAVE
		/////////
		const user = await new userModal({
			username,
			email,
			phone,
			address,
			password: hashedPassword,
		}).save();

		res.status(201).send({
			success: true,
			message: 'Registration Successful',
			user,
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: 'Error in Registration',
			err,
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
			return res.status(404).send({
				success: false,
				message: 'Invalid email or password',
			});
		}

		// * CHECKING USER
		//////////////////
		const user = await userModal.findOne({ email });

		if (!user) {
			res.status(404).send({
				success: false,
				message: 'Email is not Registered',
			});
		}

		// * COMPARING PASSWORD
		///////////////////////
		const match = await comparePassword(password, user.password);
		if (!match) {
			res.status(200).send({
				success: false,
				message: 'Invalid Password',
			});
		}

		// * TOKEN
		//////////
		const token = JWT.sign({ _id: user._id }, process.env.JWT_TOKEN, {
			expiresIn: '30d',
		});
		res.status(200).send({
			success: true,
			message: 'Login successful',
			user: {
				username: user.username,
				email: user.email,
				phone: user.phone,
				address: user.address,
			},
			token,
		});
	} catch (err) {
		res.status(500).send({
			success: false,
			message: 'Error in Login',
			err,
		});
	}
};

// * FORGOT PASSWORD || METHOD : POST
/////////////////////////////////////
export const forgotPasswordController = async (req, res) => {
	try {
		const { email, answer, newPassword } = req.body;

		// * VALIDATIONS
		////////////////
		if (!email) {
			return res.status(400).send({
				message: 'Email is required',
			});
		}
		if (!answer) {
			return res.status(400).send({
				message: 'Answer is required',
			});
		}
		if (!newPassword) {
			return res.status(400).send({
				message: 'New Password is required',
			});
		}

		// * CHECKING USER
		//////////////////
		

	} catch (error) {
		res.status(500).send({
			success: false,
			message: 'Something went wrong',
			error,
		});
	}
};

// * PRIVATE ROUTE
//////////////////
export const privateController = (req, res) => {
	res.send('This is a Private Route');
};
