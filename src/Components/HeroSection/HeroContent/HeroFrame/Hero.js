import React from "react";
import styles from "./Hero.module.css";
import HeroBanner from "../HeroBanner/HeroBanner";
import Formulario from "../Formulario/Formulario";

function Hero() {
  return (
  <div className={styles.hero}>
    <HeroBanner />
  </div>
  )
}

export default Hero;
