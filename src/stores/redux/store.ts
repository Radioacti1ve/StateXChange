import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './slices/currencySlice';

export const reduxStore = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
