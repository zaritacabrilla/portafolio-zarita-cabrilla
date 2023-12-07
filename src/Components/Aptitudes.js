import React from "react";
import { motion } from "framer-motion";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

import "../Components/Aptitudes.css";

function Aptitudes() {
  return (
    <div className="contenedor-aptitudes">
      <div className="fondo-aptitudes">
        <Menu />
        <div className="contenedor-informacion-aptitudes">
          <div className="titulo-apartado">
            <h1 className="titulo-apartado-tecnologias">Aptitudes</h1>
          </div>
          <div className="apartado-aptitudes">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="aptitud"
            >
              <p className="aptitud-uno">Trabajo en equipo</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="aptitud"
            >
              <p className="aptitud-dos">Responsabilidad</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="aptitud"
            >
              <p className="aptitud-tres">Proactividad</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="aptitud"
            >
              <p className="aptitud-cuatro">Creatividad</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="aptitud"
            >
              <p className="aptitud-cinco">Deseo de crecimiento y desarrollo</p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aptitudes;
