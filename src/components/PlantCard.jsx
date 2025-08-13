import { useCart } from '../context/CartContext';

const PlantCard = ({ plant }) => {
  const { addCartItem } = useCart();

  return (
    <div className='plant-card'>
      <h1>{plant.image}</h1>
      <h3>{plant.name}</h3>
      <button onClick={() => addCartItem(plant)}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
