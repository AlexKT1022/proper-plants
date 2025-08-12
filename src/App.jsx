import { useState } from 'react';
import PlantGrid from './components/PlantGrid';
import Cart from './components/Cart';

const App = () => {
  const [cart, setCart] = useState([
    { id: 1, image: '🌿', name: 'Fern', count: 1 },
    { id: 2, image: '🌵', name: 'Cactus', count: 2 },
  ]);

  const addCartItem = (item) => {
    const foundItem = cart.find((cartItem) => cartItem.id === item.id);

    if (foundItem) {
      updateQuantity(foundItem, 1);
    } else {
      const newCart = [...cart, { ...item, count: 1 }];

      setCart(newCart);
    }
  };

  const updateQuantity = (item, num) => {
    const newCart = [...cart];
    const targetItem = newCart.find((cartItem) => cartItem.id === item.id);

    if (targetItem.count + num <= 0) {
      removeItem(item);
    } else {
      targetItem.count += num;

      setCart(newCart);
    }
  };

  const removeItem = (item) => {
    const newCart = [...cart].filter((cartItem) => cartItem.id !== item.id);

    setCart(newCart);
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantGrid className='plant-grid' addCartItem={addCartItem} />
        <Cart className='cart' cart={cart} updateQuantity={updateQuantity} />
      </main>
    </>
  );
};

export default App;
