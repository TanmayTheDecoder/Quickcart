import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../thunks/products/getProducts';

interface ProductsInitial {
	status: string | null,
	error: string | null
	products: any[]
}

const initialState:ProductsInitial = {
	status: null,
	products: [],
	error: null
};

const getProductsSlice = createSlice({
	name: 'getProducts',
	initialState,
	extraReducers: {
		[getProducts.pending] = (state) => {
			state.status = 'pending';
		},
	},
});
