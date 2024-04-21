import userModel from '../models/user.js';
import { hashPassword } from '../utils/auth.js';

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
