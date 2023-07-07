import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="navBar" id="navBar">
        <Container>
          <Nav className="m-auto flex-grow-1 justify-content-evenly">
            <Nav.Link href="#nosotros" className="aboutUs">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="#horarios" className="businessHours">
              Horarios de atención
            </Nav.Link>
            <Nav.Link href="#mapa" className="location">
              Ubicación
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
