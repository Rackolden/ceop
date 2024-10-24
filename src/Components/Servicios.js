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
            <p className="service-title">Elaboración de Informe de Tésis</p>
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
            <p className="service-title">Levantamiento de Observaciones</p>
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
            <p className="service-title">Levantamiento de Observaciones</p>
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
            <p className="service-title">Levantamiento de Observaciones</p>
          </div>
          <div className="line-gap-service"></div>
          <a href="#" className="view-service-container">
            <p className="view-service">Ver Más</p>
          </a>
        </div>
      </div>
    </Element>
    </>
  );
}
export default Servicios;
