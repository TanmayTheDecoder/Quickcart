import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

// * DOTENV CONFIGURATION
/////////////////////////
dotenv.config();

// * ENVIRONMENT VARIABLES
//////////////////////////
const PORT = process.env.PORT;

// * DATABASE CONFIGURATION
///////////////////////////
connectDB();

// * REST OBJECT
///////////////
const app = express();

// * MIDDLEWARES
////////////////
app.use(cors({
	origin: 'http://localhost:3000/',
	methods: ['GET', 'POST']
}));
app.use(express.json());
app.use(morgan('dev'));

// * ROUTES
///////////
app.use('/api/v1/auth', authRoutes);

// * REST APIs
/////////////
app.get('/', (req, res) => {
	res.send('<h1>Welcome to Quickcart</h1>');
});

// * LISTEN
///////////
app.listen(PORT, () => {
	console.log(
		chalk.bgGreenBright.white.bold(`Server is listening on port ${PORT}`),
	);
});
