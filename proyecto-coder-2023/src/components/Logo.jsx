import React from 'react'
import hormigaLogo from "/assets/img/hormigas-coloradas-logo-version-2.png";
import facebookLogo from "/assets/img/logo-de-facebook.png";
import Carousel from './Carousel';

const Logo = () => {
  return (
    <>
    <div className='container'>
        <div className="welcome">
            <img className="hormigaFoto" src={hormigaLogo} alt="" />
        </div>
        <div className='ropaCircular'>
          <h2>Ropa circular & objetos</h2>
        </div>
        <div className='seguinos'>
            <img className='facebookLogo' src={facebookLogo} alt="" /> &nbsp;Seguinos en <strong> &nbsp;Facebook</strong>
          </div>
    </div>
    </>
  )
}

export default Logo