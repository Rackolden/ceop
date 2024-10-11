import "./NosotrosBody.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import carrousel1 from "./img-upscaling/carrousel/card-carrousel1.png";
import carrousel2 from "./img-upscaling/carrousel/card-carrousel2.png";
import carrousel3 from "./img-upscaling/carrousel/card-carrousel3.png";
import carrousel4 from "./img-upscaling/carrousel/card-carrousel4.png";

import React, { useState } from "react";

function NosotrosBody() {
  const [hovered, setHovered] = useState(false);
  const [hoveredGappy1, setHoveredGappy1] = useState(false);
  const [hoveredGappy2, setHoveredGappy2] = useState(false);

  return (
    <>
      <div className={`nosotros-section ${hovered ? "hovered" : ""}`}>
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

      <div className="container">
        <div className="card-wrapper">
          <ul className="card-list">
            <li className="card-item">
              <a className="card-link card1">
                <img src={carrousel1} alt="Card Image" className="card-image" />
                <div className="badge-container">
                  <p className="badge">Metodología</p>
                  <p className="badge">Contabilidad</p>
                  <p className="badge">Derecho</p>
                </div>
                <h2 className="card-title">
                  <p className="name-slider">Joe Skimo</p>"Pienso que los
                  carruseles son una herramienta UI/UX poderosa, que ayuda a
                  entender mejor el contenido de una página web..."
                </h2>
              </a>
            </li>
            <li className="card-item">
              <a className="card-link card2">
                <img src={carrousel2} alt="Card Image" className="card-image" />
                <div className="badge-container">
                  <p className="badge">Metodología</p>
                  <p className="badge">Contabilidad</p>
                  <p className="badge">Derecho</p>
                </div>
                <h2 className="card-title">
                  <p className="name-slider">Joe Skimo</p>"Pienso que los
                  carruseles son una herramienta UI/UX poderosa, que ayuda a
                  entender mejor el contenido de una página web..."
                </h2>
              </a>
            </li>
            <li className="card-item">
              <a className="card-link card3">
                <img src={carrousel3} alt="Card Image" className="card-image" />
                <div className="badge-container">
                  <p className="badge">Metodología</p>
                  <p className="badge">Contabilidad</p>
                  <p className="badge">Derecho</p>
                </div>
                <h2 className="card-title">
                  <p className="name-slider">Joe Skimo</p>"Pienso que los
                  carruseles son una herramienta UI/UX poderosa, que ayuda a
                  entender mejor el contenido de una página web..."
                </h2>
              </a>
            </li>
            <li className="card-item">
              <a className="card-link card4">
                <img src={carrousel4} alt="Card Image" className="card-image" />
                <div className="badge-container">
                  <p className="badge">Metodología</p>
                  <p className="badge">Contabilidad</p>
                  <p className="badge">Derecho</p>
                </div>
                <h2 className="card-title">
                  <p className="name-slider">Joe Skimo</p>"Pienso que los
                  carruseles son una herramienta UI/UX poderosa, que ayuda a
                  entender mejor el contenido de una página web..."
                </h2>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NosotrosBody;