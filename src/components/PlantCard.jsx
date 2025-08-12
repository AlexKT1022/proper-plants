const PlantCard = ({ plant }) => {
  return (
    <div>
      <h1>{plant.image}</h1>
      <h2>{plant.name}</h2>
      <button>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
