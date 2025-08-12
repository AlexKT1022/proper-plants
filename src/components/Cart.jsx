import CartItem from './CartItem';

const Cart = ({ cart }) => {
  return (
    <>
      <h2>Cart</h2>
      {cart.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </>
  );
};

export default Cart;
