import PLANTS from '../data/plants';
import PlantCard from './PlantCard';

const PlantGrid = ({ addCartItem }) => {
  return (
    <div className='plant-grid'>
      <h2>Plants</h2>
      <div>
        {PLANTS.map((plant, index) => (
          <PlantCard key={index} plant={plant} addCartItem={addCartItem} />
        ))}
      </div>
    </div>
  );
};

export default PlantGrid;
