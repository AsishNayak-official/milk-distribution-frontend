'use client';

import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './actions/shopSlice';
import utilityReducer from './actions/utilitySlice';


export const store = configureStore({
  reducer: {
    shopInfo: shopReducer,
    utility : utilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
