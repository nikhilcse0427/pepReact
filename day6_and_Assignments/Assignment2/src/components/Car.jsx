/* eslint-disable react/prop-types */


// Define the Car component
const Car = ({ brand = "Toyota" }) => {
  return (
    <div>
      <h1>The car brand is: {brand}</h1>
    </div>
  );
};

export default Car;
