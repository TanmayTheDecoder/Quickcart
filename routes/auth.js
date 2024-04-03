import express from 'express';
import {
	registerController,
	loginController,
	privateController,
} from '../controllers/authController.js';
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

// * PROTECTED ROUTE || METHOD = GET
////////////////////////////////////
router.get('/private', requireSignIn, adminMiddleware, privateController);

export default router;
