import React from "react";
import { Container} from "react-bootstrap";

const googleMapsEmbedCode =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.2009550003128!2d-64.13928175761968!3d-31.371035376399405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943297704235155b%3A0x18f785ebf4746fe2!2sFERIA%20AMERICANA%20HORMIGAS%20COLORADAS!5e0!3m2!1ses-419!2sar!4v1687128478032!5m2!1ses-419!2sar" width="1000" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

function Mapa() {
  return (
    <Container>
      <section  className="mt-4" id="mapa">
        <p className="fs-3">
          Dónde <span className="fs-3" >encontrarnos</span>
        </p>
        <p className="mt-2 fs-6">Fernando Abramo 2365, X5012. Ciudad de Córdoba.</p>

        <div className="d-flex align-items-center">
          <img className="logo-whatsapp" src="../assets/img/whatsapp.png" alt="" />

          <p className="fs-6">+54 9 351 742-4712</p>
        </div>

        <div dangerouslySetInnerHTML={{ __html: googleMapsEmbedCode }} />
      </section>
    </Container>
  );
}

export default Mapa;

