import React from "react";
import "./Modal.css";
import ModalPortal from "./ModalPortal";

function ModalTS({ isOpen, onRequestClose }) {
  return (
    <ModalPortal
      isOpen={isOpen} // Controla si el modal está abierto o no
      onRequestClose={onRequestClose} // Cierra el modal al hacer clic fuera o presionar "Esc"
    >
      <div className="elemento-modal">
        <div className="texto-modal">
          <h2 className="título-modal">Términos de Servicio</h2>
          <p className="date-modal">Última actualización: [02 / 10 / 2024]</p>
          <br />
          <p>
            Estos Términos de Servicio rigen el uso de los servicios ofrecidos
            por CEOP Business. Al acceder o utilizar nuestros servicios, usted
            acepta estar sujeto a estos términos.
          </p>
          <br></br>
          <p className="disclaimer">
            Si no está de acuerdo con alguno de estos términos, no debe utilizar
            nuestros servicios.
          </p>
          <br />
          <p className="modal-parrafo">
            1. Aceptación de los Términos Al utilizar nuestros formularios y
            servicios, usted declara que tiene al menos 18 años o que está
            utilizando nuestros servicios con el consentimiento de un padre o
            tutor.
          </p>
          <p className="modal-parrafo">
            2. Recopilación de Información CEOP Business recopila información
            personal a través de formularios en línea, incluyendo, pero no
            limitado a: Nombre, Correo Electrónico, Número de Teléfono,
            Intereses. La información recopilada se utiliza para brindar
            servicios de asesoría y para comunicarnos con los usuarios.
          </p>
          <p className="modal-parrafo">
            3. Uso de la Información La información que recopilamos se utiliza
            para: Proporcionar nuestros servicios de asesoría de tesis.
            Responder a consultas y solicitudes de información. Mejorar nuestros
            servicios y la experiencia del usuario.
          </p>
          <p className="modal-parrafo">
            4. Confidencialidad Nos comprometemos a proteger la privacidad de su
            información personal. No compartiremos, venderemos ni divulgaremos
            su información a terceros sin su consentimiento, salvo que sea
            requerido por la ley.
          </p>
          <p className="modal-parrafo">
            5. Modificaciones a los Términos CEOP Business se reserva el derecho
            de modificar estos Términos de Servicio en cualquier momento.
          </p>
          <p className="modal-parrafo">
            6. Aceptación de Cambios Al continuar utilizando nuestros servicios
            después de la publicación de cambios, usted acepta los nuevos
            términos.
          </p>
          <p className="modal-parrafo">
            7. Contacto Si tiene preguntas sobre estos Términos de Servicio, no
            dude en ponerse en contacto con nosotros a través de nuestro correo
            electrónico: contacto@ceopbusiness.com.
          </p>
          <br />
        </div>
        {/* Conectando el botón de cierre a la función onRequestClose */}
        <button onClick={onRequestClose}>Cerrar</button>
      </div>
    </ModalPortal>
  );
}

export default ModalTS;
