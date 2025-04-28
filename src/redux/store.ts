'use client';

import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './actions/shopSlice';


export const store = configureStore({
  reducer: {
    shopInfo: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
