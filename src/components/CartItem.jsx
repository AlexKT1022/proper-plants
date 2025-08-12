const CartItem = ({ item }) => {
  return (
    <div>
      <p>
        {item.image}
        {item.name}
      </p>
      <div>
        <button>-</button>
        {item.count}
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
