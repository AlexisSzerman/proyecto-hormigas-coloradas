/* import React from "react";
import { Container } from "react-bootstrap";

const Horarios = () => {
  return (
    <Container className="bg-horarios py-4" id="horarios">
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

export default Horarios; */
/* 

 */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const horarios = [
  { dia: 'Lunes', horario: ['9:00 - 13:00', '17:00 - 21:00'] },
  { dia: 'Martes', horario: ['9:00 - 13:00'] },
  { dia: 'Miércoles', horario: ['9:00 - 13:00'] },
  { dia: 'Jueves', horario: ['9:00 - 13:00', '17:00 - 21:00'] },
  { dia: 'Viernes', horario: ['9:00 - 13:00', '17:00 - 21:00'] },
  { dia: 'Sábado/Feriado', horario: ['9:00 - 13:00'] },
];

function Horarios() {
  const [horarioHover, setHorarioHover] = useState('');

  const handleHover = (horario) => {
    setHorarioHover(horario);
  };

  return (
    <div className='container-horarios' >
    <Container>
      <h3 className='mb-4' id='horarios' >Nuestros <span>Horarios</span></h3>
      <Row>
        {horarios.map((horario) => (
          <Col key={horario.dia} className='mb-2'>
            <div
              className={`card ${horarioHover === horario.dia ? 'hovered' : ''}`}
              onMouseEnter={() => handleHover(horario.dia)}
            >
              <div className="card-hover">
                <div className="dia">{horarioHover === horario.dia ? '' : horario.dia}</div>
                {horarioHover === horario.dia && (
                  <div className="horario">
                    {horario.horario.map((h, index) => (
                      <p key={index}>{h}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default Horarios;






