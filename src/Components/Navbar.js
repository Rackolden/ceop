import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "./ceop.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon-container" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </div>
          <div className="navbar-logo-container">
            <Link to="/" className="navbar-Logo">
              <img src={Logo} alt="CEOP Logo" className="logo-image"></img>
            </Link>
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <ul>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  SERVICIOS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  CONTACTO
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  RECURSOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
