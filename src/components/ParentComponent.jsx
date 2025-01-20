import FavoriteVehicle from './FavoriteVehicle';

const App = () => {
  return (
    <div>
      <h1>My Favorite Vehicle</h1>
      {/* Pass the favorite vehicle as a prop */}
      <FavoriteVehicle vehicle="Tesla Model S" />
    </div>
  );
};

export default App;
