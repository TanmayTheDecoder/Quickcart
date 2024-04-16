import express from 'express';
import {
	registerController,
	loginController,
	privateController,
	forgotPasswordController,
} from '../controllers/authControllers.js';
import {
	adminMiddleware,
	requireSignIn,
} from '../middlewares/authMiddleware.js';

// * ROUTER OBJECT
//////////////////
const router = express.Router();

// * ROUTING
////////////
// * REGISTER || METHOD = POST
//////////////////////////////
router.post('/register', registerController);

// * LOGIN || METHOD = POST
///////////////////////////
router.post('/login', loginController);

// * FORGOT PASSWORD
////////////////////
router.post('/forgotPassword', forgotPasswordController);

// * PROTECTED ROUTE || METHOD = GET
////////////////////////////////////
router.get('/private', requireSignIn, adminMiddleware, privateController);

// * PRIVATE ROUTE
//////////////////
router.get('/user-auth', requireSignIn, (req, res) => {
	res.status(200).send({ ok: true });
});

export default router;
