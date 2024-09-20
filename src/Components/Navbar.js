import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./NavBar.css";

function NavBar() {
  const ulRef = useRef();
  const showNavbar = () => {
    ulRef.current.classList.toggle("responsive_ul");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const showNavbarAlt = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    setMenuOpen(false);
  };


  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        <h1 className="ceop-title">CEOP&nbsp;</h1>
        <h2 className="business-title">Business&nbsp;</h2>
        <i className="fa-regular fa-graduation-cap"></i>
      </Link>
      <ul ref={ulRef} className="nav-item-container">
        <li className="nav-item">
          <Link to="/" className="nav-links">
            INICIO
          </Link>
        </li>
        <li className="nav-item">
          <Link to="https://google.com" className="nav-links">
            NOSOTROS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/servicios" className="nav-links">
            SERVICIOS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-links">
            CONTACTO
          </Link>
        </li>
        <li className="nav-item nav-recursos">
          <Link to="/recursos" className="nav-links">
            RECURSOS
          </Link>
        </li>
        <button className="nav-btn nav-close-btn X-btn" onClick={showNavbar}>
          <i className="fa-duotone fa-solid fa-x"></i>
        </button>
      </ul>
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <i className="fa-regular fa-bars"></i>
      </button>
      <ul></ul>
    </nav>
  );
}

export default NavBar;
