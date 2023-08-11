import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../redux/store';
// import { CartCounterState } from '../interface/Interfaces';

// interface CartItem {
//   [x: string]: any;
//   id: string;
//   // other properties of the product
// }

// interface CartCounterStateProps {
//   value: number;
//   cartItems: Record<string, CartItem>;
// }

// const initialState: CartCounterStateProps = {
//   value: 0,
//   cartItems: {},
// };

interface Product {
  // Define the structure of your product object here
  id: number;
  img: string;
  alt: string;
  category: string;
  title: string;
  price: number;
  animation: string;
}

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const CartCounterSlice = createSlice({
  name: 'CartProducts',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productIdToRemove = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

export const { addToCart, removeFromCart } = CartCounterSlice.actions;

// export const selectCart = (state: RootState) => state.addToCart.cartItems;

export default CartCounterSlice.reducer;
