import { UserInfo } from '@/lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState{
    milkSuppliedCount ?: number;
    customerCount ?: number;
    customerList ?: UserInfo[];
}

const initialState:UtilityState  = {
    milkSuppliedCount: 0,
    customerCount:0,
    customerList:[],
};

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
      updateCounter: (state, action: PayloadAction<UtilityState>) => {
        state.milkSuppliedCount = action.payload.milkSuppliedCount;
        state.customerCount = action.payload.customerCount;
      },
      clearCounter: (state) => {
        state.milkSuppliedCount = 0;
        state.customerCount = 0;
      },
      updateCustomerList: (state, action: PayloadAction<UtilityState>)=>{
        state.customerList = action.payload.customerList;
      }
    },
  });
  export const {
    updateCounter,
    clearCounter,
    updateCustomerList,
  } = customerSlice.actions;
  export default customerSlice.reducer;