import React from "react";
import styles from "./Send.module.css";

function Send() {
  return (
    <button className={styles.button} type="submit">
      <i className={`fa-solid fa-paper-plane-top ${styles["icon-submit"]}`}></i>
      Enviar
    </button>
  );
}

export default Send;
