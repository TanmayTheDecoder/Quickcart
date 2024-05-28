import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductsByFilter } from '../thunks/products/getProductsByFilter';
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

const getProductsByFilterSlice = createSlice({
	name: 'getProductsByFilter',
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
			.addCase(getProductsByFilter.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(
				getProductsByFilter.fulfilled,
				(state, action: PayloadAction<ProductsInitial[]>) => {
					state.status = 'Succeeded';
					state.products = action.payload;
				},
			)
			.addCase(getProductsByFilter.rejected, (state, action) => {
				state.status = 'Failed';
				state.error = action.payload as string;
			});
	},
});

export default getProductsByFilterSlice.reducer;
