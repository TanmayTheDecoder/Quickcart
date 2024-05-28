import { combineReducers } from 'redux';
import getProducts from './slices/getProducts';
import getProductsByFilter from './slices/getProductsByFilter';

export const rootReducer = combineReducers({
	getProducts: getProducts,
	getProductsByFilter: getProductsByFilter,
});
