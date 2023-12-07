import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import harryPotter from "../assets/images/harryPotter1.png";
import ronWeasley from "../assets/images/ronWeasley.png";
import hermioneGranger from "../assets/images/hermioneGranger.png";
import profesorDumbledore from "../assets/images/profesorDumbledore.png";
import profesorSnape from "../assets/images/profesorSnape.png";
import hagrid from "../assets/images/Hagrid.png";

function Inicio() {
  return (
    <div className="contenedor-portafolio">
      <div className="fondo-menu">
        <Menu />
        <div className="contenedor-personajes">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="contenedor-personaje"
          >
            <img
              className="personaje"
              id="harry-potter"
              src={harryPotter}
              alt="personaje de harry potter"
            />
            <div className="boton-router">
              <Link to={"/SobreMi"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="boton"
                  id="boton-presentacion"
                >
                  Sobre mí
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="contenedor-personaje"
          >
            <img
              className="personaje"
              id="profesor-dumbledore"
              src={profesorDumbledore}
              alt="personaje de profesor dumbledore"
            />
            <div className="boton-router">
              <Link to={"/Experiencia"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="boton"
                  id="boton-experiencia"
                >
                  Experiencia
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="contenedor-personaje"
          >
            <img
              className="personaje"
              id="profesor-snape"
              src={profesorSnape}
              alt="personaje de profesor snape"
            />
            <div className="boton-router">
              <Link to={"/Proyectos"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="boton"
                  id="boton-proyectos"
                >
                  Proyectos
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="contenedor-personaje"
          >
            <img
              className="personaje"
              id="hermione-granger"
              src={hermioneGranger}
              alt="personaje de hermione granger"
            />
            <div className="boton-router">
              <Link to={"/Formacion"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="boton"
                  id="boton-formacion"
                >
                  Formación
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="contenedor-personaje"
          >
            <img
              className="personaje"
              id="ron-weasley"
              src={ronWeasley}
              alt="personaje de ron weasley"
            />
            <div className="boton-router">
              <Link to={"/Aptitudes"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="boton"
                  id="boton-aptitudes"
                >
                  Aptitudes
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 2,
            }}
            className="contenedor-personaje"
          >
            <img
              className="personaje"
              id="hagrid"
              src={hagrid}
              alt="personaje de hagrid"
            />
            <div className="boton-router">
              <Link to={"/Tecnologias"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="boton"
                  id="boton-tecnologias"
                >
                  Tecnologías
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Inicio;
