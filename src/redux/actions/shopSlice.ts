import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getShopDetails } from "@/api/shopdetailsApi";
import { ShopInfo } from '@/lib/types';

  const emptyShop: ShopInfo = {
    _id: "",
    society_name: "",
    society_code: "",
    unit: "",
    month: "",
    start_bill_date: "",
    end_bill_date: "",
    created_at: "",
};

  interface ShopState {
    shop: ShopInfo;
    loading: boolean;
    error: string | null;
  }

  const initialState: ShopState = {
    shop: emptyShop,
    loading: false,
    error: null,
  };


  // Thunk using your api call
export const fetchShop = createAsyncThunk(
    "shop/fetchShop",
    async (_, thunkAPI) => {
      try {
        const shop = await getShopDetails();
        return {
            ...shop,
            start_bill_date: new Date(shop.start_bill_date).toISOString(),
            end_bill_date: new Date(shop.end_bill_date).toISOString(),
          };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


const shopSlice  = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setShop: (state, action) => {
      state.shop = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShop.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.shop = emptyShop;
      })
      .addCase(fetchShop.fulfilled, (state, action) => {
        state.loading = false;
        state.shop = action.payload;
      })
      .addCase(fetchShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.shop = emptyShop;
      });
  },
});

export const { setShop } = shopSlice.actions;
export default shopSlice.reducer;
