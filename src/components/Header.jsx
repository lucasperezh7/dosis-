import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logoImage from "../assets/logo1.png";
import mobileLogo from "../assets/logo1.png"; // Nuevo logo para móvil
import { FaBars } from "react-icons/fa"; // Icono de menú

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src={isMobile ? mobileLogo : logoImage} alt="Logo del artista" />
      </div>
      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>
      )}
      {menuOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#acerca">Acerca de</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
