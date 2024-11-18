import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { motion } from "framer-motion";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.div
      className={styles.navbar}
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Link to="/home" className={styles["title-section"]}>
        <h1 className={styles.title}>CEOP Business</h1>
        <i className={`fa-regular fa-graduation-cap ${styles.cap}`}></i>
      </Link>

      {/* Clase dinámica basada en el estado del menú */}
      <ul className={`${styles["menu-container"]} ${menuOpen ? styles["menu-close"] : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1.1 }}
        >
          <Link
            to="InicioLink"
            smooth={true}
            duration={700}
            className={styles["nav-link"]}
            onClick={closeMenu}
          >
            <i className={`fa-solid fa-house ${styles["icon-menu"]}`}>&nbsp;</i>
            INICIO
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1, delay: 0.35 }}
        >
          <Link
            to="NosotrosLink"
            smooth={true}
            duration={700}
            className={styles["nav-link"]}
            onClick={closeMenu}
          >
            <i className={`fa-solid fa-users ${styles["icon-menu"]}`}>&nbsp;</i>
            NOSOTROS
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link
            to="ServiciosLink"
            smooth={true}
            duration={700}
            className={styles["nav-link"]}
            onClick={closeMenu}
          >
            <i className={`fa-solid fa-briefcase ${styles["icon-menu"]}`}>
              &nbsp;
            </i>
            SERVICIOS
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Link
            to="ContactoLink"
            smooth={true}
            duration={700}
            className={styles["nav-link"]}
            onClick={closeMenu}
          >
            <i className={`fa-solid fa-address-book ${styles["icon-menu"]}`}>
              &nbsp;
            </i>
            CONTACTO
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 1.15, delay: 1.6 }}
        >
          <a
            href="https://google.com"
            className={styles["nav-link"]}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <i className={`fa-solid fa-books ${styles["icon-menu"]}`}>&nbsp;</i>
            RECURSOS
          </a>
        </motion.div>
      </ul>

      <button
        className={styles.button}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </button>
    </motion.div>
  );
}

export default NavBar;