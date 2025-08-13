import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import '../styles/cart.css';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className='cart'>
      <h2>Cart</h2>
      <div>
        {cart.length === 0
          ? 'This cart is empty!'
          : cart.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
      </div>
    </div>
  );
};

export default Cart;
