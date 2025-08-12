const CartItem = ({ item, updateQuantity }) => {
  return (
    <div>
      <p>
        {item.image}
        {item.name}
      </p>
      <div>
        <button onClick={() => updateQuantity(item, -1)}>-</button>
        {item.count}
        <button onClick={() => updateQuantity(item, 1)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
