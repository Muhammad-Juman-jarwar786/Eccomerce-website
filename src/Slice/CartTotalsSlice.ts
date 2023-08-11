import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subTotal: 0,
  totalQuantity: 0,
};

export const CartTotalsSlice = createSlice({
  name: 'cartTotals',
  initialState,
  reducers: {
    setSubTotal: (state, action) => {
      state.subTotal = action.payload;
    },
    setTotalQuantityCart: (state, action) => {
      state.totalQuantity = action.payload;
    },
  },
});

export const { setSubTotal, setTotalQuantityCart } = CartTotalsSlice.actions;

export default CartTotalsSlice.reducer;
