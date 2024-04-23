import JWT from 'jsonwebtoken';

// * PROTECTED ROUTE TOKEN BASED
////////////////////////////////
export const requireSignIn = async (req, res, next) => {
	try {
		const decode = JWT.verify(
			req.headers.authorization,
			process.env.JWT_SECRET,
		);
		next();
	} catch (error) {
		console.log('Error in protected route middleware', error);
	}
};
