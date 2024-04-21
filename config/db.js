import mongoose from 'mongoose';

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL).then(() => {
			console.log('Connected to database successfully');
		});
	} catch (err) {
		console.log('Mongodb connection error: ' + err);
	}
};

export default dbConnection;
