import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
});

export type ActionDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
