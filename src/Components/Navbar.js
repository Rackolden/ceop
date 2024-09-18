import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "./ceop.svg";
import { Button } from "./Button";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-Logo">
            CEOP
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/nosotros"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/servicios"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  SERVICIOS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contacto"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CONTACTO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/recursos"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  RECURSOS
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
