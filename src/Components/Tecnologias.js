import React from "react";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

import IconoCss from "../assets/images/tecnologias/css-3.png";
import IconoHtml from "../assets/images/tecnologias/html-5.png";
import IconoJavascript from "../assets/images/tecnologias/js.png";
import IconoMysql from "../assets/images/tecnologias/mysql.png";
import IconoRestapi from "../assets/images/tecnologias/rest-api-icon.png";
import IconoReact from "../assets/images/tecnologias/react.png";
import IconoGitHub from "../assets/images/tecnologias/GitHub.png";

import "../Components/Tecnologias.css";

function Tecnologias() {
  return (
    <div className="contenedor-tecnologias">
      <div className="fondo-tecnologias">
        <Menu />
        <div className="contenedor-informacion-tecnologias">
          <div className="titulo-apartado">
            <h1 className="titulo-apartado-tecnologias">Tecnologías</h1>
          </div>
          <div className="contenedor-iconos-tecnologias">
            <div
              className="icono-tecnologias"
            >
              <img
                className="icono"
                id="icono-css"
                src={IconoCss}
                alt="icono de css"
              />
            </div>
            <div className="icono-tecnologias">
              <img
                className="icono"
                id="icono-html"
                src={IconoHtml}
                alt="icono de html"
              />
            </div>
            <div className="icono-tecnologias">
              <img
                className="icono"
                id="icono-javascript"
                src={IconoJavascript}
                alt="icono de javascript"
              />
            </div>
            <div className="icono-tecnologias">
              <img
                className="icono"
                id="icono-mysql"
                src={IconoMysql}
                alt="icono de mysql"
              />
            </div>
            <div className="icono-tecnologias">
              <img
                className="icono"
                id="icono-github"
                src={IconoGitHub}
                alt="icono de github"
              />
            </div>
            <div className="icono-tecnologias">
              <img
                className="icono"
                id="icono-react"
                src={IconoReact}
                alt="icono de react"
              />
            </div>
            <div className="icono-tecnologias">
              <img
                className="icono"
                id="icono-restapi"
                src={IconoRestapi}
                alt="icono de restapi"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Tecnologias;
