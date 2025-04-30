import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState{
    milkSuppliedCount : number;
    customerCount : number;
}

const initialState:UtilityState  = {
    milkSuppliedCount: 0,
    customerCount:0,
};

export const utilitySlice = createSlice({
    name: 'utility',
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
    },
  });
  export const {
    updateCounter,
    clearCounter,
  } = utilitySlice.actions;
  export default utilitySlice.reducer;