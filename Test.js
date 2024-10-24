import React, { useState } from 'react';

const Formulario = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // URL del formulario de Google
    const formUrl = 'https://docs.google.com/forms/d/e/FORM_ID/formResponse';

    // Mapeo de los campos (estos deben coincidir con los nombres de los campos en Google Forms)
    const formData = new FormData();
    formData.append('entry.123456789', nombres); // Reemplaza 'entry.123456789' con el nombre del campo de Google Forms para nombres
    formData.append('entry.987654321', apellidos); // Reemplaza 'entry.987654321' con el nombre del campo de Google Forms para apellidos

    // Envío del formulario a Google Forms
    fetch(formUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        // Mostrar alert cuando el formulario se haya enviado correctamente
        alert('Formulario enviado correctamente');
        // Recargar la página
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error al enviar el formulario', error);
      });
  };

  return (
    <div>
      <h2>Formulario de Nombres y Apellidos</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
