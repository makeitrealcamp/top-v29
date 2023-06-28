import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../components/rtkExample/counterSlice';
import cartReducer from '../components/cart/cartSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

export default store;
