import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".nav-item-container");
      if (menu && menu.contains(event.target) === false) {
        closeMenu(); // Cierra el menú si el clic está fuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Agrega el eventListener

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpia el eventListener al desmontar
    };
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-title">
        <h1 className="ceop-title">CEOP&nbsp;</h1>
        <h2 className="business-title">Business&nbsp;</h2>
        <i className="fa-regular fa-graduation-cap"></i>
      </Link>

      {/* Clase dinámica basada en el estado del menú */}
      <ul className={`nav-item-container ${menuOpen ? "responsive_ul" : ""}`}>
        <li className="nav-item">
          <Link to="/home" className="nav-links" onClick={closeMenu}>
          <i className="fa-solid fa-house icon-menu">&nbsp;</i>INICIO
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/nosotros" className="nav-links" onClick={closeMenu}>
          <i className="fa-solid fa-users icon-menu">&nbsp;</i>NOSOTROS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/servicios" className="nav-links" onClick={closeMenu}>
          <i className="fa-solid fa-briefcase icon-menu">&nbsp;</i>SERVICIOS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-links" onClick={closeMenu}>
          <i className="fa-solid fa-address-book icon-menu">&nbsp;</i>CONTACTO
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="https://google.com"
            className="nav-links"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-books icon-menu">&nbsp;</i>RECURSOS
          </a>
        </li>
      </ul>

      {/* Botón para mostrar/ocultar el menú */}
      <button
        className="nav-btn nav-close-btn"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </button>
    </nav>
  );
}

export default NavBar;
