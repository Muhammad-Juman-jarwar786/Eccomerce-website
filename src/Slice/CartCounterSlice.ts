import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../redux/store';
import { CartCounterState } from '../interface/Interfaces';

const initialState: CartCounterState = {
  value: 0,
};

export const CartCounterSlice = createSlice({
  name: 'CartCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // updateCart: (
    //   state,
    //   action: PayloadAction<{ id: number; quantity: number }>
    // ) => {
    //   const { id, quantity } = action.payload;
    //   const productToUpdate = state.cartItems[id];

    //   if (productToUpdate) {
    //     productToUpdate.quantity = quantity;
    //     productToUpdate.total = productToUpdate.price * quantity;
    //   }
    // },
  },
});

export const { increment, incrementByAmount } = CartCounterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.increment.value;

export default CartCounterSlice.reducer;
