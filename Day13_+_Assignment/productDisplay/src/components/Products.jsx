import product_data from "../productsData";
import Product from "./Product";
import { Container, Row, Col } from 'react-bootstrap';

const Products = () => {
  return (
    <div>
      <Container>
        <Row>
          {product_data.map((product, index) => (
            <Col key={index}>
              <Product data={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;


