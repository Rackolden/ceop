import "./NosotrosBody.css";
import React, { useState } from "react";

function NosotrosBody() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="nosotros-section">
      <div className="nosotros-title-container">
        <p className={`nosotros-title-lato ${hovered ? "hovered" : ""}`}>
          Sobre Nosotros
        </p>
      </div>

      <div className="nosotros-cards-container">
        <div
          className="nosotros-texto-container uno"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="first-content">
            <p className="nosotros-card-title">Trascendencia</p>
          </div>
          <div className="second-content">
            <p className="nosotros-texto">
              CEOP Business es una empresa con más de cinco años de experiencia,
              dedicada a brindar asistencia en la elaboración de tesis para
              estudiantes de pregrado y postgrado.
            </p>
          </div>
        </div>
        <div
          className="nosotros-texto-container dos"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="first-content">
            <p className="nosotros-card-title">Profesionales</p>
          </div>

          <div className="second-content">
            <p className="nosotros-texto">
              Contamos con un equipo de profesionales capacitados en ciencias
              empresariales, sociales y de la salud. tenemos una sólida
              formación académica y experiencia práctica.
            </p>
          </div>
        </div>
        <div
          className="nosotros-texto-container tres"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="first-content">
            <p className="nosotros-card-title">Compromiso</p>
          </div>

          <div className="second-content">
            <p className="nosotros-texto">
              En CEOP Business, entendemos que elaborar una tesis puede ser un
              desafío. Nos comprometemos a ofrecer un servicio personalizado que
              ayude a los estudiantes a estructurar sus ideas efectivamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosotrosBody;
