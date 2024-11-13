import React from "react";
import styles from "./Hero.module.css";
import HeroBanner from "../HeroBanner/HeroBanner";
import Formulario from "../Formulario/FormFrame/Formulario";

function Hero() {
  return (
  <div className={styles.hero}>
    <HeroBanner />
    <Formulario />
  </div>
  )
}

export default Hero;
