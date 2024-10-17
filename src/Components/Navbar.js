import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import { motion } from "framer-motion";

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
    <motion.div
      className="navbar"
      initial={{ opacity: 0.1 }} // Estado inicial
      animate={{ opacity: 1 }} // Estado final
      transition={{ duration: 1.5 }} // Duración de la animación
    >
      <Link to="/home" className="navbar-title">
        <h1 className="ceop-title">CEOP&nbsp;</h1>
        <h2 className="business-title">Business&nbsp;</h2>
        <i className="fa-regular fa-graduation-cap"></i>
      </Link>

      {/* Clase dinámica basada en el estado del menú */}
      <ul className={`nav-item-container ${menuOpen ? "responsive_ul" : ""}`}>
        <motion.div
          className="nav-item"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1.1 }}
        >
          <Link
            to="InicioLink"
            smooth={true}
            duration={800}
            className="nav-links"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-house icon-menu">&nbsp;</i>INICIO
          </Link>
        </motion.div>
        <motion.div
          className="nav-item"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1, delay: 0.35 }}
        >
          <Link
            to="NosotrosLink"
            smooth={true}
            duration={800}
            className="nav-links"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-users icon-menu">&nbsp;</i>NOSOTROS
          </Link>
        </motion.div>
        <motion.div
          className="nav-item"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1, delay: 0.55 }}
        >
          <Link
            to="EquipoLink"
            smooth={true}
            duration={800}
            className="nav-links"
            onClick={closeMenu}
          >
            <i className="fa-duotone fa-solid fa-typewriter icon-menu"></i>&nbsp;EQUIPO
          </Link>
        </motion.div>
        <motion.div
          className="nav-item"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link
            to="ServiciosLink"
            smooth={true}
            duration={800}
            className="nav-links"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-briefcase icon-menu">&nbsp;</i>SERVICIOS
          </Link>
        </motion.div>
        <motion.div
          className="nav-item"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Link
            to="ContactoLink"
            smooth={true}
            duration={800}
            className="nav-links"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-address-book icon-menu">&nbsp;</i>CONTACTO
          </Link>
        </motion.div>
        <motion.div
          className="nav-item"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1.15, delay: 1.6 }}
        >
          <a
            href="https://google.com"
            className="nav-links"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-books icon-menu">&nbsp;</i>RECURSOS
          </a>
        </motion.div>
        
      </ul>

      {/* Botón para mostrar/ocultar el menú */}
      <button
        className="nav-btn nav-close-btn"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </button>
    </motion.div>
  );
}

export default NavBar;
