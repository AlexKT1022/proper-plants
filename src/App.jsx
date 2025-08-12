import { useState } from 'react';
import PlantGrid from './components/PlantGrid';
import Cart from './components/Cart';

export default function App() {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    const foundItem = cart.find((cartItem) => cartItem.id === item.id);

    if (foundItem) {
      foundItem.count += 1;
    } else {
      const newCart = [...cart, { ...item, count: 1 }];

      setCart(newCart);
    }

    console.log(cart);
  };

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantGrid addCartItem={addCartItem} />
        <Cart cart={cart} />
      </main>
    </>
  );
}
