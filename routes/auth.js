import express from 'express';
import { registerController } from '../controllers/auth.js';

// * ROUTE OBJECT
/////////////////
const router = express.Router();

// * ROUTING
////////////
// * REGISTRATION || METHOD : POST
//////////////////////////////////
router.use('/register', registerController);

export default router;
