import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConnection from './config/db.js';
import authRoutes from './routes/auth.js';

// * DOTENV CONFIGURATION
/////////////////////////
dotenv.config();

// * DATABASE CONFIGURATION
///////////////////////////
dbConnection();

// * REST OBJECT
////////////////
const app = express();

// * MIDDLEWARES
////////////////
app.use(express.json());
app.use(morgan('dev'));

// * ROUTES
///////////
app.use('/api/v1/auth', authRoutes);

// * REST API
/////////////
app.get('/', (req, res) => {
	res.send({
		message: 'Welcome to Quickcart',
	});
});

// * PORT
/////////
const PORT = process.env.PORT || 5000;

// * RUN LISTEN
///////////////
app.listen(PORT, () => {
	console.log(`app is listening on ${PORT}`);
});
