import express from 'express';
import {
	registerController,
	loginController,
	protectedController,
} from '../controllers/auth.js';
import { isAdmin, requireSignIn } from '../middlewares/auth.js';

// * ROUTE OBJECT
/////////////////
const router = express.Router();

// * ROUTING
////////////
// * REGISTRATION || METHOD : POST
//////////////////////////////////
router.use('/register', registerController);

// * LOGIN || METHOD : POST
///////////////////////////
router.use('/login', loginController);

// * PROTECTED || METHOD : GET
//////////////////////////////
router.use('/protected', requireSignIn, isAdmin, protectedController);

export default router;
