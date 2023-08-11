// DebugComponent.js
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/ReduxToolkitHooks';

const DebugComponent = () => {
  const state = useAppSelector(
    (state) => state.setTotalQuantityCart.totalQuantity
  ); // Get the entire Redux store state

  useEffect(() => {
    console.log('Redux store updated:', state);
  }, [state]);

  return null; // The component doesn't render anything visible
};

export default DebugComponent;

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import {RootState} from '../../redux/store';

// const customMiddleware = (store) => (next) => (action) => {
//   // Log the action and the updated state
//   console.log('Action:', action);
//   console.log('State after dispatch:', store.getState());

//   return next(action);
// };

// const store = configureStore({
//   reducer: RootState,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(customMiddleware),
// });

// export default store;
