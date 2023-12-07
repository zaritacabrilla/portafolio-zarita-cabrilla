import "./App.css";
import React from "react";
import Inicio from "./Components/Inicio";
import SobreMi from "../src/Components/SobreMi";
import Experiencia from "../src/Components/Experiencia";
import Proyectos from "../src/Components/Proyectos";
import Formacion from "../src/Components/Formacion";
import Aptitudes from "../src/Components/Aptitudes";
import Tecnologias from "../src/Components/Tecnologias";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />}/>
        <Route exact path="/SobreMi" element={<SobreMi />}/>
        <Route exact path="/Experiencia" element={<Experiencia />}/>
        <Route exact path="/Proyectos" element={<Proyectos />}/>
        <Route exact path="/Formacion" element={<Formacion />}/>
        <Route exact path="/Aptitudes" element={<Aptitudes />}/>
        <Route exact path="/Tecnologias" element={<Tecnologias />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
