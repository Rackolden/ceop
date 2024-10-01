// Components/Body.js
import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="landing-body">
      <div className="info-request">
        <div className="form-text-container">
          <p className="form-text">
            ¿Buscas acabar con tu vida? En CEOP Business somos los mejores
            denigrándote!&nbsp;;-)
          </p>
        </div>
        <form className="formulario" action="https://docs.google.com/forms/d/e/1FAIpQLSdCmUjp-O-xygXferTlZFHmu-W0KMv9lDUWjjPl9q0bHiPAbw/formResponse" method="POST" id="googleForm">
          <div className="input-box">
            <label htmlFor="name" className="label-text">
              <i className="fa-solid fa-circle-user label-icon"></i>
              &nbsp;&nbsp;Nombres y Apellidos:
            </label>
            <input
              type="text"
              id="name"
              name="entry.136780736"
              autoCapitalize="words"
              autoComplete="on"
              pattern="^(?:(?:[A-Za-z]{2,}\s+){2}[A-Za-z]{2,}(\s+[A-Za-z]{2,}){0,1})$"
              title="Por favor, ingrese un nombre válido."
              required
              placeholder="ej. Luis Pantoja Huamán"
              tabIndex="1"
            />
          </div>
          <div className="input-box">
            <label htmlFor="email" className="label-text">
              <i className="fa-solid fa-circle-envelope label-icon"></i>
              &nbsp;&nbsp;Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="entry.1731768367"
              autoCapitalize="none"
              autoComplete="on"
              required
              auto
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Ingrese una dirección de correo válida"
              placeholder="name@domain.com"
              tabIndex="2"
            />
          </div>
          <div className="input-box">
            <label htmlFor="phone" className="label-text">
              <i className="fa-solid fa-circle-phone label-icon"></i>
              &nbsp;&nbsp;Número de celular:
            </label>
            <input
              type="tel"
              autoComplete="off"
              id="phone"
              name="entry.673356154"
              autoCapitalize="none"
              pattern="^9\d{8}$"
              title="El número ingresado es incorrecto"
              placeholder="+51"
              required
              tabIndex="3"
            />
          </div>
          <div className="input-box">
            <label htmlFor="question" className="label-text">
              <i className="fa-solid fa-font-awesome label-icon"></i>
              &nbsp;&nbsp;Tipo de Consulta:
            </label>
            <input
              type="text"
              autoComplete="off"
              id="question"
              name="entry.1593289884"
              autoCapitalize="sentences"
              required
              placeholder="ej. Deseo información sobre la asesoría de tesis..."
              tabIndex="4"
            />
          </div>
          <button className="submit-btn" type="submit">
          <i className="fa-solid fa-paper-plane-top icon-submit">&nbsp;</i>E n v i a r
          </button>
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
