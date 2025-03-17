import React from "react";
import Countdown from "react-countdown";
import "../styles/IntroSection.css"; // Asegúrate de que tienes el archivo CSS adecuado

const Introsection = () => {
  // Fecha objetivo: 27 de febrero de 2025 a las 12:00h
  const targetDate = new Date(2025, 2, 18, 12, 0, 0); // Mes 1 corresponde a febrero (enero es 0)

  // Función de renderizado personalizado para el reloj digital
  const renderer = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      return <h1 className="countdown-text">¡Tiempo agotado!</h1>; // Mensaje cuando termine
    } else {
      // Total de horas incluyendo los días restantes
      const totalHours = days * 24 + hours;

      return (
        <div className="countdown-display">
          <h1 className="countdown-text">
            {totalHours < 10 ? `0${totalHours}` : totalHours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>{" "}
          {/* Formato hh:mm:ss */}
        </div>
      );
    }
  };

  return (
    <div className="introsection-container">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default Introsection;
