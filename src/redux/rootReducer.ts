import { combineReducers } from 'redux';
import getProducts from './slices/getProducts';

export const rootReducer = combineReducers({
	getProducts,
});
