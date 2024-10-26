import React from "react";
import "./Servicios.css";
import { Element } from "react-scroll";

function Servicios() {
  return (
    <>
    <Element className="services-slider" name="ServiciosLink">
      <div className="service-slider-container service1">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Servicio de Asesoría y Elaboración de Tésis</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service2">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Elaboración De Informe De Tésis</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service3">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Elaboración De Plan De Tésis</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service4">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Reporte de Turnitin</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service5">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Servicio De Parafraseo</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
    </Element>
    <div className="services-slider">
      <div className="service-slider-container service1">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Elaboración De Instrumento De Investigación</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service2">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Revisión Del Plan De Tésis</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service3">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Revisión De Informe De Tésis</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service4">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Levantamiento De Observaciones</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
      <div className="service-slider-container service5">
        <div className="service-slider-content-container">
          <div className="service-title-container">
            <p className="service-title">Entrenamiento Para Sustentación</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
export default Servicios;
