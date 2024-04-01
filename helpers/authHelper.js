import bcrypt from 'bcrypt';
import chalk from 'chalk';

export const hashPassword = async (password) => {
	try {
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		return hashedPassword;
	} catch (error) {
		console.log(chalk.bgRedBright.white.bold(error));
	}
};

export const comparePassword = async (password, hashedPassword) => {
	return bcrypt.compare(password, hashedPassword);
};
