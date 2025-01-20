import PropTypes from 'prop-types';

// Define the Product component
const Product = ({ name, price, isAvailable }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <p>{isAvailable ? "Available" : "Out of Stock"}</p>
    </div>
  );
};

// PropTypes validation
Product.propTypes = {
  name: PropTypes.string.isRequired,      
  price: PropTypes.number.isRequired,      
  isAvailable: PropTypes.bool.isRequired   
};

export default Product;
