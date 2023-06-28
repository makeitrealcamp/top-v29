import { createSlice } from '@reduxjs/toolkit';

import { products } from '../assets/data';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    list: products,
  },
  reducers: {},
});

export default productSlice.reducer;
