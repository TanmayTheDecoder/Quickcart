import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

console.log('console_process', process.env.API_URL);
export const getProducts = createAsyncThunk(
	'productsSlice/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(`${process.env.API_URL}`);
			if (response.status === 200) {
				return response.data.products;
			} else {
				return rejectWithValue('Products not found');
			}
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return rejectWithValue(
					err.response?.data?.message || 'An unexpected error occurred',
				);
			}
			return rejectWithValue('An unexpected error occurred');
		}
	},
);
