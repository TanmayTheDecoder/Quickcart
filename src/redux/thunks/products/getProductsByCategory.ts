import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductsByCategory = createAsyncThunk(
	'productsSlice/getProductsByFilter',
	async (category: string, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://dummyjson.com/products/category/${category}`,
			);

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
