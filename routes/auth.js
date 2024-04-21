import express from 'express';
import { registerController, loginController } from '../controllers/auth.js';

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

export default router;
