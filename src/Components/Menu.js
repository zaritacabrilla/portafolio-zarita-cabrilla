import React from "react";
import nombreZarita from "../assets/images/nombre5.png";

function Menu() {
  return (
      <div className="nombre-presentacion">
        <img
          className="nombre-zarita"
          src={nombreZarita}
          alt="nombre de Zarita"
        />
        <div className="puesto-trabajo">
          <p className="texto-puesto">Fronted Developer Jr.</p>
        </div>
      </div>
  );
}

export default Menu;
