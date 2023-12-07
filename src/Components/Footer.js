import React from "react";

import "../Components/Footer.css"

function Footer () {
    return(
        <footer className="contenedor-datos-personales">
          <h1 className="titulo-footer">Datos personales</h1>
          <div className="informacion-datos">
            <p>Mérida Yucatán</p>
            <a className="enlace-linkedin" href="https://www.linkedin.com/in/zarita-cabrilla-manzanero-12b3ab240/">
              LinkedIn
            </a>
            <div className="contenedor-celular">
            <p className="titulo-celular">Celular:</p>
            <p className="numero-celular">99-93-47-14-00</p>
            </div>
            <div className="contenedor-correo">
            <p className="titulo-correo">Correo:</p>
            <a href="/" className="correo-personal">zaritacabrilla1011@gmail.com</a>
            </div>
          </div>
        </footer>
    );
}

export default Footer;