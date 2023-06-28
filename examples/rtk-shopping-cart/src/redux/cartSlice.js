import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    // caseReducer
    addCart: (state, action) => {
      const newProduct = action.payload;

      // Option 1
      // const newCart = [...state.items, newProduct];
      // const total = newCart.reduce((acc, curr) => acc + curr.price, 0);
      // state.items = newCart;
      // state.total = total;

      // Option 2
      state.items.push(newProduct);
      const { items } = current(state);
      const total = items.reduce((acc, curr) => acc + curr.price, 0);
      state.total = total;
    },
    removeProduct: (state, { payload }) => {
      const productToRemove = payload;

      const { items } = current(state);
      const newCart = items.filter(
        (product) => product.id !== productToRemove.id,
      );
      const total = newCart.reduce((acc, curr) => acc + curr.price, 0);

      state.items = newCart;
      state.total = total;
    },
  },
});

export const { addCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
