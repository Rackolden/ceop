import React, { useState } from "react";
import styles from "./ToS.module.css";
import ModalTS from "../Modal/ModalTS";
import ModalPP from "../Modal/ModalPP";

function ToS() {
  const [isOpenPP, setIsOpenPP] = useState(false);
  const [isOpenTS, setIsOpenTS] = useState(false);
  const openModalPP = () => setIsOpenPP(true);
  const closeModalPP = () => setIsOpenPP(false);
  const openModalTS = () => setIsOpenTS(true);
  const closeModalTS = () => setIsOpenTS(false);

  return (
    <div className={styles["ts-section"]}>
      <input type="checkbox" required className={styles["ts-checkbox"]} />
      &nbsp;&thinsp;Acepto los&nbsp;
      <span className={styles["modal-link"]} onClick={openModalTS}>
        Términos de Servicio
      </span>
      &nbsp;y&nbsp;
      <span className={styles["modal-link"]} onClick={openModalPP}>
        Políticas de Privacidad
      </span>
      <ModalTS isOpen={isOpenTS} onRequestClose={closeModalTS} />
      <ModalPP isOpen={isOpenPP} onRequestClose={closeModalPP} />
    </div>
  );
}

export default ToS;
