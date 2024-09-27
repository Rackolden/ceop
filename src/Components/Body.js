// Components/Body.js
import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="landing-body">
      <div className="info-request">
        <div className="form-text-container">
          <p className="form-text">¿Buscas acabar tu tesis? En CEOP Business somos los mejores!&nbsp;;-)</p>
        </div>
        <form className="formulario">
          <div className="input-box">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"            
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Número de celular:</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Consulta:</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
          <button className="submit-btn" type="submit">Enviar</button>
        </form>
      </div>

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
