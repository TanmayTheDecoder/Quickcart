import express from 'express';
import http from 'http';
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
const server = http.createServer(app);

// * MIDDLEWARES
////////////////
app.use(express.json());
app.use(cors('*'));
app.use(morgan('dev'));

// * ROUTES
///////////
app.use('/api/v1/auth', authRoutes);

// * REST APIs
//////////////
app.get('/', (req, res) => {
	res.send('<h1>Welcome to Quickcart</h1>');
});

// * LISTEN
///////////
server.listen(PORT, () => {
	console.log(
		chalk.bgGreenBright.white.bold(`Server is listening on port ${PORT}`)
	);
});
