import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navBar'>
        <Container>
          <Nav className="m-auto flex-grow-1 justify-content-evenly">
            <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#features">Horarios de atención</Nav.Link>
            <Nav.Link href="#pricing">Ubicación</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;