import styles from "./Cards.module.css";
import { motion } from "framer-motion";
import React, { useState } from "react";

function Cards() {
  const [hovered, setHovered] = useState(false);
  const [hoveredGappy1, setHoveredGappy1] = useState(false);
  const [hoveredGappy2, setHoveredGappy2] = useState(false);

  return (
      <motion.div
        id="NosotrosLink"
        className={`${styles.container} ${
          hovered ? styles.hovered : ""
        }`}
      >
        <motion.div className={styles.title}>
            Sobre Nosotros
        </motion.div>

        <div className={styles["cards-section"]}>

          <motion.div
            className={`${styles.card} ${styles.one}`}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => {
              setHovered(true);
              setHoveredGappy1(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredGappy1(false);
            }}
          >

            <div className={styles.front}>
              <p className="nosotros-card-title">Misión</p>
              <div className="ver-más-container">
                <p className="ver-más-texto">Ver Más</p>
              </div>
            </div>

            <div className={styles.cover}>
              <p className="nosotros-texto">
                CEOP Business es una empresa con más de cinco años de
                experiencia, dedicada a brindar asistencia en la elaboración de
                tesis para estudiantes de pregrado y postgrado.
              </p>
            </div>
            
          </motion.div>

          <div
            className={`gappy1 ${hoveredGappy1 ? "hoveredGappy1" : ""}`}
          ></div>

          <motion.div
            className={`${styles.card} ${styles.two}`}
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            onMouseEnter={() => {
              setHovered(true);
              setHoveredGappy1(true);
              setHoveredGappy2(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredGappy1(false);
              setHoveredGappy2(false);
            }}
          >
            <div className={styles.front}>
              <p className="nosotros-card-title">Visión</p>
              <div className="ver-más-container">
                <p className="ver-más-texto">Ver Más</p>
              </div>
            </div>

            <div className={styles.cover}>
              <p className="nosotros-texto">
                Contamos con un equipo de profesionales capacitados en ciencias
                empresariales, sociales y de la salud. tenemos una sólida
                formación académica y experiencia práctica.
              </p>
            </div>
          </motion.div>

          <div
            className={`gappy2 ${hoveredGappy2 ? "hoveredGappy2" : ""}`}
          ></div>

          <motion.div
            className={`${styles.card} ${styles.three}`}
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            onMouseEnter={() => {
              setHovered(true);
              setHoveredGappy2(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setHoveredGappy2(false);
            }}
          >
            <div className={styles.front}>
              <p className="nosotros-card-title">Compromiso</p>
              <div className="ver-más-container">
                <p className="ver-más-texto">Ver Más</p>
              </div>
            </div>

            <div className={styles.cover}>
              <p className="nosotros-texto">
                En CEOP Business, entendemos que elaborar una tesis puede ser un
                desafío. Nos comprometemos a ofrecer un servicio personalizado
                que ayude a los profesionales a estructurar sus ideas en una
                tésis de éxito.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
  );
}

export default Cards;