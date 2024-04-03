import express from 'express';
import { registerController } from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
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

export default router;
