import "./NosotrosBody.css";
import Carrousel from "./Carrousel";

import React, { useState } from "react";

function NosotrosBody() {
  const [hovered, setHovered] = useState(false);
  const [hoveredGappy1, setHoveredGappy1] = useState(false);
  const [hoveredGappy2, setHoveredGappy2] = useState(false);

  return (
    <>
      <div id="NosotrosLink" className={`nosotros-section ${hovered ? "hovered" : ""}`}>
        <div className="nosotros-title-container">
          <p className={`nosotros-title-lato ${hovered ? "hovered" : ""}`}>
            Sobre Nosotros
          </p>
        </div>

        <div className="nosotros-cards-container">
          <div
            className="nosotros-texto-container uno"
            onMouseEnter={() => {
              setHovered(true);
              setHoveredGappy1(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredGappy1(false);
            }}
          >
            <div className="first-content">
              <p className="nosotros-card-title">Trascendencia</p>
              <div className="ver-más-container">
                <p className="ver-más-texto">Ver Más</p>
              </div>
            </div>
            <div className="second-content">
              <p className="nosotros-texto">
                CEOP Business es una empresa con más de cinco años de
                experiencia, dedicada a brindar asistencia en la elaboración de
                tesis para estudiantes de pregrado y postgrado.
              </p>
            </div>
          </div>

          <div
            className={`gappy1 ${hoveredGappy1 ? "hoveredGappy1" : ""}`}
          ></div>

          <div
            className="nosotros-texto-container dos"
            onMouseEnter={() => {
              setHovered(true);
              setHoveredGappy1(true);
              setHoveredGappy2(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredGappy1(false);
              setHoveredGappy2(false);
            }}
          >
            <div className="first-content">
              <p className="nosotros-card-title">Profesionales</p>
              <div className="ver-más-container">
                <p className="ver-más-texto">Ver Más</p>
              </div>
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
            className={`gappy2 ${hoveredGappy2 ? "hoveredGappy2" : ""}`}
          ></div>
          <div
            className="nosotros-texto-container tres"
            onMouseEnter={() => {
              setHovered(true);
              setHoveredGappy2(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredGappy2(false);
            }}
          >
            <div className="first-content">
              <p className="nosotros-card-title">Compromiso</p>
              <div className="ver-más-container">
                <p className="ver-más-texto">Ver Más</p>
              </div>
            </div>

            <div className="second-content">
              <p className="nosotros-texto">
                En CEOP Business, entendemos que elaborar una tesis puede ser un
                desafío. Nos comprometemos a ofrecer un servicio personalizado
                que ayude a los estudiantes a estructurar sus ideas
                efectivamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Carrousel/>
    </>
  );
}

export default NosotrosBody;
