import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateQuantity = (item, num) => {
    const newCart = [...cart];
    const targetItem = newCart.find((cartItem) => cartItem.id === item.id);

    if (targetItem.count + num <= 0) {
      removeCartItem(item);
    } else if (targetItem.count + num > 20) {
      return;
    } else {
      targetItem.count += num;

      setCart(newCart);
    }
  };

  const addCartItem = (item) => {
    const foundItem = cart.find((cartItem) => cartItem.id === item.id);

    if (foundItem) {
      updateQuantity(foundItem, 1);
    } else {
      const newCart = [...cart, { ...item, count: 1 }];

      setCart(newCart);
    }
  };

  const removeCartItem = (item) => {
    const newCart = [...cart].filter((cartItem) => cartItem.id !== item.id);

    setCart(newCart);
  };

  const value = {
    cart,
    updateQuantity,
    addCartItem,
    removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
