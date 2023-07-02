import React from "react";
import hormigaLogo from "/assets/img/hormigas-coloradas-logo-version-2.png";
import facebookLogo from "/assets/img/logo-de-facebook.png";
import Carousel from "./Carousel";

const Logo = () => {
  return (
    <>
      <div className="container">
        <div className="welcome">
          <img className="hormigaFoto" src={hormigaLogo} alt="" />
        </div>
        <div className="ropaCircular">
          <h2>Ropa circular & objetos</h2>
        </div>
        <div className="seguinos">
          <a href="https://www.facebook.com/hormigas.coloradas" target="_blank" className="facebookTexto">
            <img className="facebookLogo" src={facebookLogo} /> &nbsp;Seguinos en <strong>Facebook</strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default Logo;
