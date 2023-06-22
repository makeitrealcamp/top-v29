import { ADD_TO_CART, SET_LOADING, REMOVE_FROM_CART } from './types';

/**
 * Creates an action to set loading state
 * @param {boolean} isLoading
 * @returns
 */
export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

/**
 * Creates an action to set products
 * @param {Object} products
 * @returns
 */
export const addProductToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeProductFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});
