import { useReducer } from 'react';
import { cartInitialState, cartReducer, CART_ACTION_TYPES } from './cart';

export const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = CART_ACTION_TYPES;

  const addToCart = (product) =>
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CLEAR_CART,
    });

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
