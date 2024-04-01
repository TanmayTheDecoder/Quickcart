import { hashPassword } from '../helpers/authHelper.js';
import userModal from '../models/user.js';

export const registerController = async (req, res) => {
	try {
		const { username, email, password, phone, address } = req.body;

		// * VALIDATIONS
		////////////////
		if (!username) {
			return res.send({
				error: 'Name is required!',
			});
		}
		if (!email) {
			return res.send({
				error: 'Email is required!',
			});
		}
		if (!password) {
			return res.send({
				error: 'Password is required!',
			});
		}
		if (!phone) {
			return res.send({
				error: 'Phone is required!',
			});
		}
		if (!address) {
			return res.send({
				error: 'Address is required!',
			});
		}

		// * CHECKING USER
		//////////////////
		const existingUser = userModal.findOne({ email });

		// * EXISTING USER
		//////////////////
		if (existingUser) {
			res.status(200).send({
				success: true,
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
