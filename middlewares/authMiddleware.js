import JWT from 'jsonwebtoken';
import userModel from '../models/user.js';

// * PROTECTED ROUTE (TOKEN BASED)
///////////////////////////////////
export const requireSignIn = (req, res, next) => {
	try {
		const decode = JWT.verify(req.headers.authorization, process.env.JWT_TOKEN);
		req.user = decode;
		next();
	} catch (error) {
		console.log('Not authorized');
	}
};

// * ADMIN ROUTE (ROLE BASED)
/////////////////////////////
export const adminMiddleware = async (req, res, next) => {
	try {
		const user = await userModel.findById(req.user._id);
		if (user.role !== 1) {
			res.status(401).send({
				success: false,
				message: 'Unauthorized access',
			});
		} else {
			next();
		}
	} catch (error) {
		console.log(error);
	}
};
