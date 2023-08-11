import { configureStore } from '@reduxjs/toolkit';
import increment from '../Slice/CartCounterSlice';
import incrementByAmount from '../Slice/CartCounterSlice';
import addToCart from '../Slice/CartProductsSlice';
import removeFromCart from '../Slice/CartProductsSlice';
import setSubTotal from '../Slice/CartTotalsSlice';
import setTotalQuantityCart from '../Slice/CartTotalsSlice';

export const store = configureStore({
  reducer: {
    increment,
    incrementByAmount,
    addToCart,
    removeFromCart,
    setSubTotal,
    setTotalQuantityCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
