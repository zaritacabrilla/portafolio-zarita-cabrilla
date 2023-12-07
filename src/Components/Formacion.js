import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";

import ImagenDementor from "../assets/images/dementor.png";

import "../Components/Formacion.css";

function Formacion() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const variants = {
    initial: { y: 0 },
    animate: { y: -100 },
    exit: { y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 20,
    damping: 2,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationComplete(false);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [animationComplete]);
  
  return (
    <div className="contenedor-formacion">
      <div className="fondo-formacion">
        <Menu />
        <div className="contenedor-informacion-formacion">
            <div className="titulo-apartado">
                <h1 className="titulo-apartado-formacion">Formación</h1>
            </div>
          <div className="imagen-formacion">
            <motion.img
              initial="initial"
              animate={animationComplete ? "initial" : "animate"}
              exit="exit"
              variants={variants}
              transition={transition}
              onAnimationComplete={() => setAnimationComplete(true)}
              className="imagen-formacion-dementor"
              src={ImagenDementor}
              alt="Imagen de un dementor"
            />
          </div>
          <div className="informacion-de-formacion">
            <div className="texto datasqool">
              <h2 className="titulo-lugar">Datasqool</h2>
              <p className="periodo-realizacion">oct. 2023 - Actualmente</p>
              <h3 className="puesto-ocupante">Cursadora</h3>
              <p className="titulo-curso">
                Programa de Desarrollo Web DATASQOOL
              </p>
            </div>
            <div className="texto udemy">
              <h2 className="titulo-lugar">Udemy</h2>
              <p className="periodo-realizacion">may. 2023 - jul. 2023</p>
              <h3 className="puesto-ocupante">Cursadora</h3>
              <p className="titulo-curso">
                Desarrollo Web Completo con HTML5, CSS3, JS, AJAX PHP Y MySQL
              </p>
            </div>
            <div className="texto codecademy">
              <h2 className="titulo-lugar">Codecademy</h2>
              <p className="periodo-realizacion">feb. 2023 - may. 2023</p>
              <h3 className="puesto-ocupante">Cursadora</h3>
              <p className="titulo-curso">
                Learn JavaScript - Learn C - Learn How to Code
              </p>
            </div>
            <div className="texto educacion">
              <h2 className="titulo-lugar">Facultad de Educación - UADY</h2>
              <p className="periodo-realizacion">ago. 2018 - ago. 2022</p>
              <h3 className="puesto-ocupante">Licenciada en Educación </h3>
              <p className="titulo-curso">
                Licenciatura en Educación - Mérida, Yucatán
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Formacion;
