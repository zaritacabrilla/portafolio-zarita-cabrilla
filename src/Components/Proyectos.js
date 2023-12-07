import { React, useState } from "react";
import { motion } from "framer-motion";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import "../Components/Proyectos.css";

import SitioFreelancer from "../assets/images/Sitio-freelancer.png";
import FrontendStore from "../assets/images/FrontendStore.png";
import CoffeeBlog from "../assets/images/CoffeeBlog.png";
import LoginInstagram from "../assets/images/login-instagram.png";

function Proyectos() {
  const [isZoomed, setZoomed] = useState(false);

  const handleZoom = () => {
    setZoomed(!isZoomed);
  };

  const estilosContenedorProyecto = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: isZoomed ? "rgba(0, 0, 0, 0.8)" : "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    overflow: "hidden",
  };

  return (
    <div className="contenedor-proyectos">
      <div className="fondo-proyectos">
        <Menu />
        <div className="contenedor-informacion-proyectos">
          <div className="titulo-apartado">
            <h1 className="titulo-apartado-proyectos">Proyectos</h1>
            <a className="enlace-github" href="https://github.com/zaritacabrilla?tab=repositories">Repositorios de GitHub</a>
          </div>
          <div className="apartado-proyectos">
            <div className="proyecto freelancer">
              <motion.div
                style={isZoomed ? estilosContenedorProyecto : handleZoom}
                onClick={handleZoom}
                className="contenedor-imagen-proyecto"
              >
                <motion.img
                  style={{
                    width: isZoomed ? "1050px" : "200px",
                    cursor: "pointer",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="proyecto-imagen"
                  id="sitio-freelancer"
                  src={SitioFreelancer}
                  alt="sitio frelancer"
                />
              </motion.div>
              <h2 className="titulo-proyecto">Sitio Freelancer</h2>
              <p className="descripcion-proyecto">
                Es una página web de un freelancer, el cual contiene apartados como un menu, formulario y descripción de servicios para el cliente.
              </p>
              <p className="tecnologias-proyecto">css y html</p>
              <a className="enlace-proyecto" href="https://github.com/zaritacabrilla/SitioFreelancer_MyFirstProject.git">
                SitioFreelancer-GitHub
              </a>
            </div>
            <div className="proyecto store">
              <motion.div
                style={isZoomed ? estilosContenedorProyecto : handleZoom}
                onClick={handleZoom}
                className="contenedor-imagen-proyecto"
              >
                <motion.img
                  style={{
                    width: isZoomed ? "1050px" : "200px",
                    cursor: "pointer",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="proyecto-imagen"
                  id="frontend-store"
                  src={FrontendStore}
                  alt="Frontend Store"
                />
              </motion.div>
              <h2 className="titulo-proyecto">Frontend Store</h2>
              <p className="descripcion-proyecto">
                Es una página web que simula una tienda de camisas en línea.
              </p>
              <p className="tecnologias-proyecto">css y html</p>
              <a className="enlace-proyecto" href="https://github.com/zaritacabrilla/FrontendStore_MySecondProject.git"> FrontendStore-GitHub
              </a>
            </div>
            <div className="proyecto blog">
              <motion.div
                style={isZoomed ? estilosContenedorProyecto : handleZoom}
                onClick={handleZoom}
                className="contenedor-imagen-proyecto"
              >
                <motion.img
                  style={{
                    width: isZoomed ? "1050px" : "200px",
                    cursor: "pointer",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="proyecto-imagen"
                  id="coffee-blog"
                  src={CoffeeBlog}
                  alt="Coffee Blog"
                />
              </motion.div>
              <h2 className="titulo-proyecto">Coffee Blog</h2>
              <p className="descripcion-proyecto">
                Es una página web que simula un blog en el que se pueden describir consejos, recetas o preparaciones sobre el café.
              </p>
              <p className="tecnologias-proyecto">css y html</p>
              <a className="enlace-proyecto" href="https://github.com/zaritacabrilla/CoffeeBlog_MyThirdProject.git">
                CoffeBlog-GitHub
              </a>
            </div>
            <div className="proyecto login">
              <motion.div
                style={isZoomed ? estilosContenedorProyecto : handleZoom}
                onClick={handleZoom}
                className="contenedor-imagen-proyecto"
              >
                <motion.img
                  style={{
                    width: isZoomed ? "1050px" : "200px",
                    cursor: "pointer",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="proyecto-imagen"
                  id="login-instagram"
                  src={LoginInstagram}
                  alt="Login Instagram"
                />
              </motion.div>
              <h2 className="titulo-proyecto">Login de Instagram</h2>
              <p className="descripcion-proyecto">
                Es una copia del login de instagram, en la que se pueden ver los principales estilos como en los inputs para agregar el usuario y la contraseña, el slider y el dropdown para las opciones de lenguaje.
              </p>
              <p className="tecnologias-proyecto">css, html, javascript</p>
              <a className="enlace-proyecto" href="/">
                LoginInstagram-GitHub
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Proyectos;
