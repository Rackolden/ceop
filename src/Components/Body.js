// Components/Body.js
import React from "react";
import "./Body.css";
import Hero from "./HeroSection/HeroContent/HeroFrame/Hero"
import Cards from "./Nosotros/Cards/Cards";
import Swiper from "./Nosotros/Swiper/SwiperEmp"
import Servicios from "./Servicios";
import VideoCeop from "./VideoCeop";
import Article from "./ArticleSection/Article";

function Body() {
  return (
    <div className="landing-body" id="InicioLink">
      <Hero />
      <Cards />
      <Swiper />
      <Article />
      <Servicios />
      <VideoCeop />
    </div>
  );
}

export default Body;