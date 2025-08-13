import PlantGrid from './components/PlantGrid';
import Cart from './components/Cart';

const App = () => {
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
};

export default App;
