import express from 'express';
import { registerController } from '../controllers/registerController.js';

// * ROUTER OBJECT
//////////////////
const router = express.Router();

// * ROUTING
////////////
// * REGISTER || METHOD = POST
//////////////////////////////
router.post('/register', registerController);

export default router;
