
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar>
          <Navbar.Brand href="#home">MyName</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mentorship</Nav.Link>
            <Button variant="primary">Submit</Button>
          </Nav>
      </Navbar>
      <br />
      
    </>
  );
}

export default Header;