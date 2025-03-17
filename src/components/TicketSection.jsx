import React from "react";
import { Link, Element } from "react-scroll"; // Importa Link y Element desde react-scroll
import "../styles/TicketSection.css"; // Estilo para la sección

const TicketSection = () => {
  return (
    <div className="scroll-section-container">
      {/* Sección de inicio con el enlace para hacer scroll */}
      <div className="scrolling-section">
        <h2 className="scroll-header">¡Bienvenido a la Sección de Scroll!</h2>
        <p>Haz clic abajo para desplazarte hacia otra sección de la página.</p>
        {/* Enlace de desplazamiento suave usando react-scroll */}
        <Link to="" smooth={true} duration={800} className="scroll-link">
          Ir a la siguiente sección
        </Link>
      </div>

      {/* Zona de destino a la que se hará scroll */}
      <Element name="target-section" className="target-section">
        <h2 className="target-header">¡Has llegado a la sección de destino!</h2>
        <p>
          Esta es la zona a la que se hará scroll cuando hagas clic en el enlace
          arriba.
        </p>
      </Element>
    </div>
  );
};

export default TicketSection;
