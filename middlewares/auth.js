import JWT from 'jsonwebtoken';
import userModel from '../models/user.js';

// * PROTECTED ROUTE - TOKEN BASED
////////////////////////////////
export const requireSignIn = async (req, res, next) => {
	try {
		const decode = JWT.verify(
			req.headers.authorization,
			process.env.JWT_SECRET,
		);
		req.user = decode;
		next();
	} catch (error) {
		console.log('Error in protected route middleware', error);
	}
};

// *  ADMIN ACCESS - ROLE BASED
///////////////////////////////
export const isAdmin = async (req, res, next) => {
	try {
		const user = await userModel.findById(req.user._id);
		if (user.role !== 1) {
			return res.status(401).send({
				success: false,
				message: 'Unauthorized. Please Authenticate',
			});
		} else {
			next();
		}
	} catch (error) {
		res.status(401).send({
			success: false,
			error,
			message: 'Error in Admin Middleware',
		});
		console.log('Error while checking authorization');
	}
};
