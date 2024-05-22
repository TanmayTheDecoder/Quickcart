import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
	'productsSlice/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get('http://localhost:8080/products');
			if (response.status === 200) {
				return response.data;
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
