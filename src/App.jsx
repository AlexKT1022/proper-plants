import Cart from './components/Cart';
import PlantGrid from './components/PlantGrid';

export default function App() {
  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantGrid />
        <Cart />
      </main>
    </>
  );
}
