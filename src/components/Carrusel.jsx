import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carrusel.css"; // Asegúrate de que este archivo tenga los estilos aplicados

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const ImageCarousel = () => {
  const [centerImage, setCenterImage] = useState(0);

  const images = [img1, img2, img3, img4, img5];

  const settings = {
    infinite: true,
    centerMode: true, // Activa el modo centrado
    slidesToShow: 3, // Muestra tres imágenes a la vez
    slidesToScroll: 1, // Mueve una imagen a la vez
    centerPadding: "0", // Elimina el padding extra alrededor de la imagen central
    focusOnSelect: true, // Permite seleccionar la imagen al hacer clic
    beforeChange: (oldIndex, newIndex) => setCenterImage(newIndex),
    responsive: [
      {
        breakpoint: 768, // Para pantallas pequeñas
        settings: {
          slidesToShow: 1, // Muestra una sola imagen en pantallas pequeñas
          centerMode: false, // Desactiva el modo centrado en pantallas pequeñas
          centerPadding: "20px", // Añade un poco de padding para pantallas más pequeñas
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`p-2 transition-all duration-300 ease-in-out ${
              index === centerImage ? "scale-110 opacity-100" : "opacity-70"
            }`}
          >
            <img src={img} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
