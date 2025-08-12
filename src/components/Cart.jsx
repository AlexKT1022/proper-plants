import CartItem from './CartItem';
import '../styles/cart.css';

const Cart = ({ cart, updateQuantity }) => {
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <div>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
