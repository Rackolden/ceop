import React from "react";
import Modal from "react-modal";
import "./Modal.css";
import ModalPortal from "./ModalPortal";

function ModalPP({ isOpen, onRequestClose }) {
  return (
    <ModalPortal
      isOpen={isOpen} // Controla si el modal está abierto o no
      onRequestClose={onRequestClose}
    >
      {" "}
      <div className="elemento-modal-PP">
        <div className="texto-modal">
          <div className="título-modal-contenedor">
            <h2 className="título-modal">Política de Privacidad</h2>
          </div>
          <br></br>
          <p className="date-modal">Última actualización: [02 / 10 / 2024]</p>{" "}
          <br></br>
          <p>
            En CEOP Business, estamos comprometidos a proteger la privacidad de
            nuestros usuarios.
          </p>
          <p className="disclaimer">
            Esta Política de Privacidad explica cómo recopilamos, usamos,
            compartimos y protegemos su información personal cuando utiliza
            nuestros servicios. Al acceder o utilizar nuestros servicios, usted
            acepta los términos descritos en esta política.
          </p>
          <br></br>
          <p className="modal-parrafo">
            1. Información que Recopilamos Recopilamos información personal de
            los usuarios a través de formularios en línea, interacciones con
            nuestros servicios y cualquier otro medio de contacto. La
            información que recopilamos incluye, pero no se limita a: Nombre
            completo Dirección de correo electrónico Número de teléfono
            Intereses o preferencias Información de pago (cuando corresponda)
          </p>
          <p className="modal-parrafo">
            2. Cómo Utilizamos su Información La información personal que
            recopilamos se utiliza para: Proporcionar los servicios ofrecidos
            por CEOP Business, incluyendo asesoría de tesis y otros servicios de
            consultoría. Procesar pagos y emitir facturas. Responder a consultas
            y solicitudes de los usuarios. Personalizar la experiencia del
            usuario, adaptando los servicios a sus intereses y necesidades.
            Enviar notificaciones sobre actualizaciones de nuestros servicios,
            promociones o cambios en nuestras políticas. Mejorar nuestros
            servicios mediante análisis de uso y comentarios de los usuarios.
          </p>
          <p className="modal-parrafo">
            3. Compartir Información con Terceros En CEOP Business, no
            compartimos, vendemos ni divulgamos su información personal a
            terceros sin su consentimiento, excepto en los siguientes casos:
            Cuando sea necesario para cumplir con obligaciones legales. Para
            proteger nuestros derechos y propiedades o los de nuestros usuarios.
            Cuando sea requerido para completar transacciones o proporcionar
            servicios a través de terceros proveedores, como procesadores de
            pago o servicios de envío de correos electrónicos.
          </p>
          <p className="modal-parrafo">
            4. Seguridad de la Información Implementamos medidas de seguridad
            técnicas y organizativas adecuadas para proteger su información
            personal contra accesos no autorizados, alteraciones, divulgación o
            destrucción. Sin embargo, ningún método de transmisión por Internet
            o almacenamiento electrónico es completamente seguro, por lo que no
            podemos garantizar la seguridad absoluta de su información.
          </p>
          <p className="modal-parrafo">
            5. Sus Derechos Dependiendo de su ubicación, usted puede tener
            ciertos derechos sobre su información personal, incluidos: El
            derecho a acceder a los datos que CEOP Business tiene sobre usted.
            El derecho a solicitar la corrección de cualquier información
            inexacta o incompleta. El derecho a solicitar la eliminación de sus
            datos, salvo que existan motivos legales para conservarlos. El
            derecho a retirar su consentimiento en cualquier momento, si el
            procesamiento de sus datos se basa en el consentimiento. Si desea
            ejercer alguno de estos derechos, póngase en contacto con nosotros
            utilizando la información de contacto proporcionada a continuación.
          </p>
          <p className="modal-parrafo">
            6. Cookies y Tecnologías Similares CEOP Business utiliza cookies y
            tecnologías similares para mejorar la funcionalidad de nuestro sitio
            web y brindarle una mejor experiencia de usuario. Las cookies son
            pequeños archivos de texto que se almacenan en su dispositivo cuando
            visita nuestro sitio. Puede configurar su navegador para rechazar
            las cookies, pero esto puede afectar la funcionalidad de nuestro
            sitio web.
          </p>
          <p className="modal-parrafo">
            7. Modificaciones a esta Política de Privacidad CEOP Business se
            reserva el derecho de modificar esta Política de Privacidad en
            cualquier momento. Los cambios serán efectivos inmediatamente tras
            su publicación en nuestro sitio web. Le recomendamos revisar
            periódicamente esta página para estar informado sobre las
            actualizaciones.
          </p>
          <p className="modal-parrafo">
            8. Contacto Si tiene preguntas o inquietudes sobre esta Política de
            Privacidad o sobre el manejo de su información personal, no dude en
            ponerse en contacto con nosotros a través de: Correo electrónico:
            contacto@ceopbusiness.com Dirección física: [Agregar dirección
            física]
          </p>
        </div>
        {/* Conectando el botón de cierre a la función onRequestClose */}
        <button onClick={onRequestClose}>Cerrar</button>
      </div>
    </ModalPortal>
  );
}

export default ModalPP;
