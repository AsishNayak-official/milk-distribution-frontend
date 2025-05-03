'use client';

import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './actions/shopSlice';
import customerReducer from './actions/customerSlice';


export const store = configureStore({
  reducer: {
    shopInfo: shopReducer,
    customers : customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
