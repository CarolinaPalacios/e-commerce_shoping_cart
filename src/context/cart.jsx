import { createContext } from 'react';
import { useCartReducer } from '../reducers/useCartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //* con useState
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   // setCart([...cart, product]);
  //   // Check if the product is already in the cart
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //   if (productInCartIndex >= 0) {
  //     //! el structuredClone sirve hace copias profundas de los arrays y objetos
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity += 1;
  //     return setCart(newCart);
  //   }
  //   // producto no está en el carrito
  //   setCart((prevState) => [
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1,
  //     },
  //   ]);
  // };

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  // const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  // if (productInCartIndex >= 0) {
  //   const newCart = structuredClone(cart);
  //   if (newCart[productInCartIndex].quantity > 1) {
  //     newCart[productInCartIndex].quantity -= 1;
  //   } else {
  //     newCart.splice(productInCartIndex, 1);
  //   }
  //   return setCart(newCart);
  // }
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };

  //* con useReducer
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
