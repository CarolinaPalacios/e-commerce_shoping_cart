export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

// update localStorage with state for cart
export const updateLocalStorageCart = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const productInCartIndex = state.findIndex(
      (item) => item.id === action.payload.id
    );
    if (productInCartIndex >= 0) {
      //? 👀 usando structuredClone
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;

      //? 👶 usando map
      // const newState = state.map((item) => {
      //   if (item.id === action.payload.id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1,
      //     };
      //   }
      //   return item;
      // });

      //? ⚡ usando spread operator y slice
      // const newState = [
      //   ...state.slice(0, productInCartIndex),
      //   {
      //     ...state[productInCartIndex],
      //     quantity: state[productInCartIndex].quantity + 1,
      // },
      // ...state.slice(productInCartIndex + 1),
      //]
      updateLocalStorageCart(newState);
      return newState;
    }
    const newState = [...state, { ...action.payload, quantity: 1 }];
    updateLocalStorageCart(newState);
    return newState;
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const newState = state.filter((item) => item.id !== action.payload.id);
    updateLocalStorageCart(newState);
    return newState;
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorageCart([]);
    return [];
  },
};

export const cartReducer = (state, action) => {
  const { type } = action;
  const newState = UPDATE_STATE_BY_ACTION[type];
  return newState ? newState(state, action) : state;
};
