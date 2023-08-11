import { configureStore } from '@reduxjs/toolkit';
import increment from '../Slice/CartCounterSlice';
import incrementByAmount from '../Slice/CartCounterSlice';
import addToCart from '../Slice/CartProductsSlice';
import removeFromCart from '../Slice/CartProductsSlice';

export const store = configureStore({
  reducer: {
    increment,
    incrementByAmount,
    addToCart,
    removeFromCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
