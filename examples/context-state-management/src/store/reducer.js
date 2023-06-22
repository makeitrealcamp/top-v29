import {
  ADD_TO_CART,
  SET_LOADING,
  SET_PRODUCTS,
  REMOVE_FROM_CART,
} from './types';

function reducer(state, action) {
  switch (action.type) {
    case SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case ADD_TO_CART: {
      const newProduct = action.payload;
      const newCart = [...state.cart, newProduct];
      const total = newCart.reduce((acc, curr) => acc + curr.price, 0);

      return { ...state, cart: newCart, total };
    }
    case REMOVE_FROM_CART: {
      const productToRemove = action.payload;
      const newCart = state.cart.filter(
        (product) => product.id !== productToRemove.id,
      );
      console.log('🚀 ~ file: reducer.js:28 ~ reducer ~ newCart:', newCart);
      const total = newCart.reduce((acc, curr) => acc + curr.price, 0);

      return { ...state, cart: newCart, total };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
