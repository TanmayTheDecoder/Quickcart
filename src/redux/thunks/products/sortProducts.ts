import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios';

interface Filter {
	[key: string]: string;
}

export const sortProducts = createAsyncThunk(
	'productsSlice/sortProducts',
	async (filter: Filter, { rejectWithValue }) => {
		try {
			let query = '';
			for (let key in filter) {
				query += `$[key] = ${filter[key]}&`;
			}
			query = query.slice(0, -1);

			const response = await axios.get(
				'https://dummyjson.com/products?limit=100',
			);
		} catch (err) {
			if (axios.isAxiosError(err)) {
				return (
					rejectWithValue(err.response?.data?.message) ||
					'An unexpected error occurred'
				);
			}
			return rejectWithValue('An unexpected error occurred');
		}
	},
);
