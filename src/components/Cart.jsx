import CartItem from './CartItem';

const Cart = ({ cart, updateQuantity }) => {
  return (
    <div>
      <h2>Cart</h2>
      <div className='cart'>
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
