// Components/Body.js
import React from "react";
import "./Body.css";
import sticky from "./img-upscaling/landing-rs1.png";

function Body() {
  return (
    <div className="landing-body">
      {/* Hero section with main heading */}
      <img
        src={sticky}
        className="landing-main-image"
        alt="tusk_spin_his_balls"
        title="tusk_act_4_spin_his_balls"
      ></img>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Consultoría Legal Profesional</h1>
          <p>Soluciones legales confiables para empresas y particulares.</p>
          <a href="#services" className="cta-button">
            Nuestros Servicios
          </a>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="services-section">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Asesoría Corporativa</h3>
            <p>
              Proteja y optimice su empresa con nuestros servicios
              especializados en derecho corporativo.
            </p>
          </div>
          <div className="service-card">
            <h3>Litigios y Resoluciones</h3>
            <p>Defensa sólida y soluciones rápidas en disputas legales.</p>
          </div>
          <div className="service-card">
            <h3>Derecho Laboral</h3>
            <p>Asistencia legal completa para empresas y empleados.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>¿Necesita Asesoría Legal?</h2>
        <p>Contáctenos hoy mismo para una consulta inicial sin compromiso.</p>
        <a href="#contact" className="cta-button">
          Contáctanos
        </a>
      </section>
    </div>
  );
}

export default Body;
