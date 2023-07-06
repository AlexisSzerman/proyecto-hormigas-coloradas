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
    <div className='container-horarios'>
      <Container>
        <h3 className='mb-4' id='horarios'>
          Nuestros <span>Horarios</span>
        </h3>
        <Row>
          {horarios.map((horario) => (
            <Col key={horario.dia} className='mb-2' xs={12} sm={6} md={4} lg={2}>
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









