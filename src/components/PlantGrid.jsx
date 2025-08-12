import PLANTS from '../data/plants';
import PlantCard from './PlantCard';

const PlantGrid = ({ addCartItem }) => {
  return (
    <>
      <h2>Plants</h2>
      {PLANTS.map((plant, index) => (
        <PlantCard key={index} plant={plant} addCartItem={addCartItem} />
      ))}
    </>
  );
};

export default PlantGrid;
