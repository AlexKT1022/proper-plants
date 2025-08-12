const PlantCard = ({ plant, addCartItem }) => {
  return (
    <div>
      <h1>{plant.image}</h1>
      <h2>{plant.name}</h2>
      <button onClick={() => addCartItem(plant)}>Add to Cart</button>
    </div>
  );
};

export default PlantCard;
