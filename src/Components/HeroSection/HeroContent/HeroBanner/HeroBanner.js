import React from "react";
import styles from "./HeroBanner.module.css";
import { motion } from "framer-motion";

function HeroBanner() {
  return (
    <>
      <motion.div
        className={styles["text-container"]}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className={styles["form-text"]}>
          Es momento de dar el siguiente paso.<br />¡Inicia tu tésis hoy con CEOP
          Business!
        </p>
      </motion.div>
    </>
  );
}

export default HeroBanner;
