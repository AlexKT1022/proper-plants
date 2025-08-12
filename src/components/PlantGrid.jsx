import PLANTS from '../data/plants';
import PlantCard from './PlantCard';

const PlantGrid = () => {
  return (
    <>
      <h2>Plants</h2>
      {PLANTS.map((plant, index) => (
        <PlantCard key={index} plant={plant} />
      ))}
    </>
  );
};

export default PlantGrid;
