import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../thunks/products/getProducts';
interface ProductsInitial {
	status: string | null;
	error: string | null;
	products: any[];
}

const initialState: ProductsInitial = {
	status: null,
	products: [],
	error: null,
};

const getProductsSlice = createSlice({
	name: 'getProducts',
	initialState,
	reducers: {
		resetProducts: (state) => {
			state.status = 'idle';
			state.products = [];
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(
				getProducts.fulfilled,
				(state, action: PayloadAction<ProductsInitial[]>) => {
					state.status = 'Succeeded';
					state.products = action.payload;
				},
			)
			.addCase(getProducts.rejected, (state, action) => {
				state.status = 'Failed';
				state.error = action.payload as string;
			});
	},
});

export default getProductsSlice.reducer;
