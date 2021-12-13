export const PlantListItem = ({ plant }) => {
  return (
    <div className="plant-list-item">
      <a href="">
        <img src={plant.image} />
      </a>
      <div className="plant-list-item__title">{plant.title}</div>
    </div>
  );
};
