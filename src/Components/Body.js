// Components/Body.js
import React, { useState } from "react";
import "./Body.css";
import Hero from "./HeroSection/HeroContent/HeroFrame/Hero"
import NosotrosBody from "./NosotrosBody";
import Carrousel from "./Swiper/Carrousel"
import Servicios from "./Servicios";
import VideoCeop from "./VideoCeop";
import Article from "./ArticleSection/Article";

function Body() {
  return (
    <div className="landing-body" id="InicioLink">
      <Hero />
      <NosotrosBody />
      <Carrousel />
      <Article />
      <Servicios />
      <VideoCeop />
    </div>
  );
}

export default Body;