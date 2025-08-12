const CartItem = ({ item, updateQuantity }) => {
  return (
    <div className='cart-item'>
      <p>
        {item.image}
        {item.name}
      </p>
      <div className='cart-item-quantity'>
        <button
          className='item-quantity-element'
          onClick={() => updateQuantity(item, -1)}
        >
          -
        </button>
        <p className='item-quantity-element'>{item.count}</p>
        <button
          className='item-quantity-element'
          onClick={() => updateQuantity(item, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
