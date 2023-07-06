import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Nosotros = () => {


  return (
    <Container className="mt-5" id="nosotros" >
      <Row>
        <Col md={4}>
          <div className="sobre-nosotros">
            <h3>Sobre <span className="fs-3">Nosotros</span></h3>
          </div>
        </Col>
        <Col md={8}>

            <Card.Body className="fs-6 nosotros-texto">
              Hormigas coloradas es un emprendimiento de recirculación de ropa y
              objetos que nació en 2012 por una necesidad barrial. Comenzó en
              una plaza de la ciudad de Córdoba, pero en muy poco tiempo fue
              creciendo y hoy ya contamos con nuestro propio local. Buscamos
              cubrir las necesidades de todo tipo de clientes, desde los más
              pequeños hasta los más grandes. Proponemos una alternativa
              sustentable, que permite a las personas acceder a mejores precios,
              y además, nos aseguramos de que las prendas estén en buen estado y
              a la moda. También contamos con algunos productos nuevos, para tu
              uso cotidiano o para regalar.
            </Card.Body>

        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
