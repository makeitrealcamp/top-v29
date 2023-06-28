import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  total: 0,
  promoCode: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
