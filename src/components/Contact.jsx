import React from "react";
import "../styles/Contact.css";

// Importar los iconos de FontAwesome
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importar los iconos

const ContactSection = () => {
  return (
    <>
      {/* Sección de introducción */}
      <section className="intro-section">
        <div className="intro-container">
          <div className="bio">
            <h2>Sobre el Artista</h2>
            <p>
              Egho es un artista de Alicante que ha estado creando música desde
              2018. Con su estilo único, compone canciones llenas de emoción y
              letras que conectan. ¡Déjate llevar por su magia musical!
            </p>
          </div>
          <div className="social-links">
            <h2>Conéctate</h2>
            <ul className="social-links">
              <li>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-spotify"></i> {/* Icono de Spotify */}
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i> {/* Icono de YouTube */}
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>{" "}
                  {/* Icono de Instagram */}
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tiktok"></i> {/* Icono de TikTok */}
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
