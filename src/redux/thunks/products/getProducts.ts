import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
	'productsSlice/getProducts',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get('http://localhost:8080/products');
			return response.data;
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);
