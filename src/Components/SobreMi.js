import React from "react";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

import "../Components/SobreMi.css";
import HarryEscoba from "../assets/images/harry-escoba.png";
import SnitchDorada from "../assets/images/snitch-dorada.png";

function SobreMi() {
  return (
    <div className="contenedor-presentacion">
      <div className="fondo-sobre-mi">
        <Menu />
        <div
        className="contenedor-snitch-dorada">
          <img className="imagen-snitch-dorada" src={SnitchDorada} id="snitch-dorada" alt="snitch dorada"/>
        </div>
        <div className="contenedor-informacion-sobre-mi">
          <div className="titulo-apartado">
            <h1 className="titulo-apartado-sobre-mi">Sobre mí</h1>
          </div>
          <div className="contenedor-imagen-harry-escoba">
            <img
              className="imagen-harry-escoba"
              id="harry-escoba"
              src={HarryEscoba}
              alt="Harry en una escoba"
            />
          </div>
          <p className="informacion-sobre-mi">
            Desarrollador FrontEnd con 5 meses de experiencia en desarrollo de
            páginas web. Experiencia práctica en React, JavaScript, ApiRest y
            MySQL. Estoy ansiosa por adquirir un puesto que me permita obtener
            mayor conocimiento, habilidades y experiencia en FrontEnd y BackEnd.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SobreMi;
