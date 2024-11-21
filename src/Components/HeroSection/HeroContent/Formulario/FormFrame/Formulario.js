import React, { useState } from "react";
import styles from "./Formulario.module.css";
import ToS from "../ToS/ToS";
import Send from "../Send/Send";

function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    detail: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
      form.append(`entry.${getEntryID(key)}`, formData[key]);
    });

    // Verifica los datos que estás enviando
    for (let pair of form.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSe6ZNBfe_0p2Bcv0AdRnpHbhWp_HfVdlIMYKWFXl6zvqO8uRQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: form,
      }
    )
      .then(() => {
        alert("¡Formulario enviado correctamente!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  };

  const getEntryID = (name) => {
    const entryIDs = {
      name: "1957556326",
      email: "440148510",
      phone: "1850310446",
      type: "480874524",
      detail: "989361815",
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          autoComplete="on"
          pattern="^(?:(?:[A-Za-z]{2,}\s+){2}[A-Za-z]{2,}(\s+[A-Za-z]{2,}){0,1})$"
          title="Por favor, ingrese un nombre válido."
          required
          placeholder="ej. Luis Pantoja Huamán"
          tabIndex="1"
          className={styles.input}
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="on"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Ingrese una dirección de correo válida"
            required
            placeholder="name@domain.com"
            tabIndex="2"
            className={styles.input}
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
        <label htmlFor="type" className={styles["label-text"]}>
          <i
            className={`fa-solid fa-list-dropdown ${styles["label-icon"]}`}
          ></i>
          Tipo de Consulta
        </label>
        <select
          className={styles.input}
          value={formData.type}
          onChange={handleChange}
          id="type"
          name="type"
        >
          <option value="blank">--Selecciona una opción--</option>
          <option value="servicio-parafraseo">Servicio de Parafraseo</option>
          <option value="asesoria-elaboració-tesis">Asesoría y Elaboración de Tesis</option>
          <option value="reporte-turnitin">Reporte de Turnitin</option>
          <option value="elaboración-plan-tesis">Elaboración de Plan de Tesis</option>
          <option value="elaboración-informe-tesis">Elaboración de Informe de Tesis</option>
          <option value="elaboración-instrumento-investigacion">Elaboración de Instrumento de Investigación</option>
          <option value="revision-plan-tesis">Revisión del Plan de Tesis</option>
          <option value="revision-informe-tesis">Revisión de Informe de Tesis</option>
          <option value="levantamiento-observaciones">Levantamiento de Observaciones</option>
          <option value="procesamiento-analisis-datos">Procesamiento y Análisis de Datos</option>
          <option value="entrenamiento-sustentacion">Entrenamiento para Sustentación</option>
          <option value="clases-metodologia">Clases de Metodología</option>
          <option value="clases-estadistica">Clases de Estadística</option>
        </select>
      </div>

      <div className={styles["input-box"]}>
        <label htmlFor="question" className={styles["label-text"]}>
          <i className={`fa-solid fa-font-awesome ${styles["label-icon"]}`}></i>
          Detalle de Consulta:
        </label>
        <input
          type="text"
          id="detail"
          name="detail"
          value={formData.detail}
          onChange={handleChange}
          required
          placeholder="ej. Deseo información sobre la asesoría de tesis..."
          tabIndex="4"
          className={styles.input}
        />
      </div>
      <ToS />
      <Send />
    </form>
  );
}

export default Formulario;
