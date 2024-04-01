import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DB_URL);
		console.log(chalk.bgGreenBright.bold('Connected to cloud database'));
	} catch (err) {
		console.log(chalk.bgRedBright.bold(err));
	}
};

export default connectDB;
