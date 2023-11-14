import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icons';
import CartItem from './CartItem';
import { useCart } from '../hooks/useCart';
import './Cart.css';

const Cart = () => {
  const cardCkeckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label htmlFor={cardCkeckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cardCkeckboxId} hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              {...product}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
