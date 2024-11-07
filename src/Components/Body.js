// Components/Body.js
import React, { useState } from "react";
import "./Body.css";
import ModalTS from "./ModalTS";
import ModalPP from "./ModalPP";
import NosotrosBody from "./NosotrosBody";
import Carrousel from "./Swiper/Carrousel"
import Servicios from "./Servicios";
import VideoCeop from "./VideoCeop";
import Article from "./ArticleSection/Article";
import { motion } from "framer-motion";

function Body() {
  // Estado para controlar qué modal está abierto
  const [isOpenPP, setIsOpenPP] = useState(false);
  const [isOpenTS, setIsOpenTS] = useState(false);

  const openModalPP = () => setIsOpenPP(true);
  const closeModalPP = () => setIsOpenPP(false);

  const openModalTS = () => setIsOpenTS(true);
  const closeModalTS = () => setIsOpenTS(false);

  // Se crea un estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  // Esta función se encarga de actualizar el estado formData cuando el usuario escribe en los campos
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Se evita el comportamiento por defecto de recargar la página

    // Se crea un objeto FormData para enviar los datos al formulario de Google Forms
    const form = new FormData();

    // Se añaden los valores de los campos al objeto FormData utilizando los 'entry' de Google Forms
    Object.keys(formData).forEach((key) => {
      form.append(`entry.${getEntryID(key)}`, formData[key]);
    });

    // Se envían los datos a Google Forms usando la URL de formResponse
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdCmUjp-O-xygXferTlZFHmu-W0KMv9lDUWjjPl9q0bHiPAbw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: form,
      }
    );
    // Mostrar alerta, limpiar campos y recargar la página inmediatamente después de la solicitud
    alert("¡Formulario enviado correctamente!"); // Mensaje de confirmación al usuario

    setFormData({
      name: "",
      email: "",
      phone: "",
      question: "",
    }); // Limpiar los campos del formulario

    // Recargar la página después de que el usuario acepta la alerta
    window.location.reload();
  };

  // Función que devuelve el ID de entrada (entry) correspondiente a cada campo
  const getEntryID = (name) => {
    const entryIDs = {
      name: "136780736",
      email: "1731768367",
      phone: "673356154",
      question: "1593289884",
    };
    return entryIDs[name]; // Se utiliza para asignar el entry correcto a cada campo
  };

  return (
    <motion.div className="landing-body" id="InicioLink">
      <motion.div
        className="info-request"
        initial={{ opacity: 0.9 }} // Estado inicial: invisible
        animate={{ opacity: 1 }} // Estado final: completamente visible
        transition={{ duration: 1.8 }}
      >
        <motion.div
          className="form-text-container"
          initial={{ opacity: 0, x: -150 }} // Desplazamiento inicial
          animate={{ opacity: 1, x: 0 }} // Posición final
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="form-text">
            ¿Buscas acabar con tu tesis? En CEOP Business somos los
            mejores!&nbsp;;-)
          </p>
        </motion.div>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="name" className="label-text">
              <i className="fa-solid fa-circle-user label-icon"></i>
              Nombres y Apellidos:
            </label>
            <input
              type="text"
              id="name"
              name="name" // El atributo name aquí es clave para mapear los campos al formData
              value={formData.name} // El valor viene del estado
              onChange={handleChange} // El cambio de valor actualiza el estado
              autoCapitalize="words"
              autoComplete="on"
              pattern="^(?:(?:[A-Za-z]{2,}\s+){2}[A-Za-z]{2,}(\s+[A-Za-z]{2,}){0,1})$"
              title="Por favor, ingrese un nombre válido."
              required
              placeholder="ej. Luis Pantoja Huamán"
              tabIndex="1"
              className="form-input"
            />
          </div>

          <div className="input-box">
            <label htmlFor="email" className="label-text">
              <i className="fa-solid fa-circle-envelope label-icon"></i>
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email" // El entry correspondiente está asignado a este campo
              value={formData.email}
              onChange={handleChange}
              autoCapitalize="none"
              autoComplete="on"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Ingrese una dirección de correo válida"
              required
              placeholder="name@domain.com"
              tabIndex="2"
              className="form-input"
            />
          </div>

          <div className="input-box">
            <label htmlFor="phone" className="label-text">
              <i className="fa-solid fa-circle-phone label-icon"></i>
              Número de celular:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="^9\d{8}$" // Validación para asegurarse de que el número de teléfono esté en formato correcto
              title="El número ingresado es incorrecto"
              required
              placeholder="+51"
              tabIndex="3"
              className="form-input"
            />
          </div>

          <div className="input-box">
            <label htmlFor="question" className="label-text">
              <i className="fa-solid fa-font-awesome label-icon"></i>
              Tipo de Consulta:
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              required
              placeholder="ej. Deseo información sobre la asesoría de tesis..."
              tabIndex="4"
              className="form-input"
            />
          </div>

          <div className="input-box-confirm">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="input-confirm"
            />{" "}
            <label className="label-text-confirm">
              &nbsp;&nbsp;Acepto los{" "}
              <a className="label-link-confirm" href="#" onClick={openModalTS}>
                términos de servicio
              </a>
              <ModalTS isOpen={isOpenTS} onRequestClose={closeModalTS} /> y{" "}
              <a className="label-link-confirm" href="#" onClick={openModalPP}>
                políticas de privacidad
              </a>
              <ModalPP isOpen={isOpenPP} onRequestClose={closeModalPP} />
            </label>
          </div>

          <button className="submit-btn" type="submit">
            <i className="fa-solid fa-paper-plane-top icon-submit">&nbsp;</i>
            Enviar
          </button>
        </form>
      </motion.div>

      <NosotrosBody />
      <Carrousel />
      <Article />
      <Servicios />
      <VideoCeop />
    </motion.div>
  );
}

export default Body;
