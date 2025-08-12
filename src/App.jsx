import { useState } from 'react';
import PlantGrid from './components/PlantGrid';
import Cart from './components/Cart';

export default function App() {
  const [cart, setCart] = useState([
    { id: 1, image: '🌿', name: 'Fern', count: 1 },
    { id: 2, image: '🌵', name: 'Cactus', count: 2 },
  ]);

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
        <div>
          <PlantGrid className='plant-grid' addCartItem={addCartItem} />
        </div>
        <div>
          <Cart className='cart' cart={cart} />
        </div>
      </main>
    </>
  );
}
