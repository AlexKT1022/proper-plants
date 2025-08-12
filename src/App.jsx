import PlantGrid from './components/PlantGrid';
import Cart from './components/Cart';

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
