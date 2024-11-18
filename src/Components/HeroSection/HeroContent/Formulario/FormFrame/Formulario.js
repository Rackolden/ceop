import React, { useState } from "react";
import styles from "./Formulario.module.css";
import ToS from "../ToS/ToS";
import Send from "../Send/Send";

function Formulario() {
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
    e.preventDefault();
    const form = new FormData();

    // Se añaden los valores de los campos al objeto FormData utilizando los 'entry' de Google Forms
    Object.keys(formData).forEach((key) => {
      form.append(`entry.${getEntryID(key)}`, formData[key]);
    });

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdCmUjp-O-xygXferTlZFHmu-W0KMv9lDUWjjPl9q0bHiPAbw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: form,
      }
    );
    alert("¡Formulario enviado correctamente!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      question: "",
    });
    window.location.reload();
  };

  const getEntryID = (name) => {
    const entryIDs = {
      name: "136780736",
      email: "1731768367",
      phone: "673356154",
      question: "1593289884",
    };
    return entryIDs[name];
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles["input-box"]}>
        <label htmlFor="name" className={styles["label-text"]}>
          <i className={`fa-solid fa-circle-user ${styles["label-icon"]}`}></i>
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
          className={styles["input"]}
        />
      </div>

      <div className={styles["input-wrap"]}>
        <div className={styles["input-box"]}>
          <label htmlFor="email" className={styles["label-text"]}>
            <i
              className={`fa-solid fa-circle-envelope ${styles["label-icon"]}`}
            ></i>
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
            className={styles["input"]}
          />
        </div>

        <div className={styles["input-box"]}>
          <label htmlFor="phone" className={styles["label-text"]}>
            <i
              className={`fa-solid fa-circle-phone ${styles["label-icon"]}`}
            ></i>
            Número de Celular:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="^9\d{8}$"
            title="El número ingresado es incorrecto"
            required
            placeholder="+51"
            tabIndex="3"
            className={styles["input"]}
          />
        </div>
      </div>

      <div className={styles["input-box"]}>
        <label htmlFor="dropdown">Selecciona una opción:</label>
        <select className={styles.input} id="dropdown">
          <option value="">--Selecciona una opción--</option>
          <option value="opcion1">Servicio de Parafraseo</option>
          <option value="opcion2">Asesoría y Elaboración de Tesis</option>
          <option value="opcion3">Reporte de Turnitin</option>
          <option value="opcion4">Elaboración de Plan de Tesis</option>
          <option value="opcion2">Elaboración de Informe de Tesis</option>
          <option value="opcion3">Elaboración de Instrumento de Investigación</option>
          <option value="opcion1">Revisión del Plan de Tesis</option>
          <option value="opcion2">Revisión de Informe de Tesis</option>
          <option value="opcion3">Levantamiento de Observaciones</option>
          <option value="opcion3">Procesamiento y Análisis de Datos</option>
          <option value="opcion1">Entrenamiento para Sustentación</option>
          <option value="opcion2">Clases de Metodología</option>
          <option value="opcion3">Clases de Estadística</option>
        </select>
      </div>

      <div className={styles["input-box"]}>
        <label htmlFor="question" className={styles["label-text"]}>
          <i className={`fa-solid fa-font-awesome ${styles["label-icon"]}`}></i>
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
          className={styles["input"]}
        />
      </div>
      <ToS />
      <Send />
    </form>
  );
}

export default Formulario;
