import { combineReducers } from 'redux';
import products from './slices/products';

export const rootReducer = combineReducers({
	products: products,
});
