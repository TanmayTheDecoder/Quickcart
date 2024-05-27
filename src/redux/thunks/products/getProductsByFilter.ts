import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Filter {
	[key: string]: string | number | undefined;
}

export const getProductsByFilter = createAsyncThunk(
	'productsSlice/getProductsByFilter',
	async (filter: Filter, { rejectWithValue }) => {
		try {
			let query = '';
			for (let key in filter) {
				if (query !== undefined) query += `${key}=${filter[key]}&`;
			}
			query = query.slice(0, -1);
			const response = await axios.get(
				'http://localhost:8080/products?' + query,
			);

			if (response.status === 200) {
				return response.data;
			} else {
				return rejectWithValue('Product not found');
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
