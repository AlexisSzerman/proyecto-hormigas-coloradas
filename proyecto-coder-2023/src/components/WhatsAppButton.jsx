import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-floating-button">
      <div>
        <a className='m-2 fs-3 hormiga' href="#navBar">🐜</a>
      <a
        href="https://api.whatsapp.com/send?phone=5493517424712"
        target="_blank"
        rel="noopener noreferrer"
      >
       <img className="logo-whatsapp-floating" src="../assets/img/whatsapp.png" alt="icono whatsapp" />
      </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;


