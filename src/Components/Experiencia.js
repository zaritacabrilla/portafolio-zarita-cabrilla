import React from "react";
import { motion } from "framer-motion";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

import ProfesoraMacgonagall from "../assets/images/profesoraMacgonagall.png";

import "../Components/Experiencia.css";

function Experiencia() {
  return (
    <div className="contenedor-experiencia">
      <div className="fondo-experiencia">
        <Menu />
        <div className="contenedor-informacion-experiencia">
          <div className="titulo-apartado">
            <h1 className="titulo-apartado-experiencia">Experiencia</h1>
          </div>
          <div className="imagen-experiencia">
            <img
              className="imagen-formacion-profesora"
              src={ProfesoraMacgonagall}
              alt="Imagen de la profesora Macgonagall"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="informacion-de-experiencia"
          >
            <div className="experiencia wipburger">
              <h2 className="nombre-lugar">Wip burgers</h2>
              <p className="temporalidad"> jun. 2023 - oct. 2023</p>
              <h3 className="nombre-puesto">Freelancer</h3>
              <p className="descripcion-de-trabajo">
                Creación de formularios para agregar datos administrativos del
                restaurante. Diseño de tablas para la administración y
                visualización de la información. Conexión de la página con Api
                para el almacenamiento y administración de datos. Cambios en la
                Api Rest en Node.js.
              </p>
            </div>
            <div className="experiencia uabic">
              <h2 className="nombre-lugar">Uabic uady</h2>
              <p className="temporalidad">feb. 2022 - may. 2022</p>
              <h3 className="nombre-puesto">Practicante</h3>
              <p className="descripcion-de-trabajo">
                Diseño de recursos digitales
              </p>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Experiencia;
