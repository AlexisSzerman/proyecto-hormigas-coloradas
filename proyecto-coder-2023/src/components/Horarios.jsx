import React from "react";
import { Container } from "react-bootstrap";

const Horarios = () => {
  return (
    <Container className="bg-horarios py-4">
      <div className="parent">
        <div className="div1">
          <div className="title-horarios">
            <div className="d-flex flex-column fw-bold custom-gap">
              <div className="fs-1">HO</div>
              <div className="fs-1">RA</div>
              <div className="fs-1">RIOS</div>
            </div>
          </div>
        </div>
        <div className="div2">
          <span className="ms-4">Lunes</span>
          <div className="div-detail">
          <p className="text-center fw-bold">9:00 a 13:00</p>
          <p className="text-center fw-bold">17:00 a 21:00</p>
          </div>

        </div>
        <div className="div3">
          <span className="ms-4">Martes</span>
          <p className="text-center fw-bold div-detail">9:00 a 13:00</p>
        </div>
        <div className="div4">
          <span className="ms-4">Miércoles</span>
          <p className="text-center fw-bold div-detail">9:00 a 13:00</p>
        </div>
        <div className="div5">
          <span className="ms-4">Jueves</span>
          <div className="div-detail">
          <p className="text-center fw-bold">9:00 a 13:00</p>
          <p className="text-center fw-bold">17:00 a 21:00</p>
          </div>

        </div>
        <div className="div6">
          <span className="ms-4">Viernes</span>
          <div className="div-detail">
          <p className="text-center fw-bold">9:00 a 13:00</p>
          <p className="text-center fw-bold">17:00 a 21:00</p>
          </div>
        </div>
        <div className="div7">
          <span className="ms-4">Sábados y Feriados</span>
          <p className="text-center fw-bold div-detail">9:00 a 13:00</p>
        </div>
      </div>
    </Container>
  );
};

export default Horarios;
