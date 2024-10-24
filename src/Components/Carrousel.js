import "./Carrousel.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import "swiper/css/bundle";
import carrousel1 from "./img-upscaling/carrousel/card-carrousel1.png";
import carrousel2 from "./img-upscaling/carrousel/card-carrousel2.png";
import carrousel3 from "./img-upscaling/carrousel/card-carrousel3.png";
import carrousel4 from "./img-upscaling/carrousel/card-carrousel4.png";
import carrousel5 from "./img-upscaling/carrousel/card-carrousel5.png";
import carrousel6 from "./img-upscaling/carrousel/card-carrousel6.png";
import carrousel7 from "./img-upscaling/carrousel/card-carrousel7.png";
import carrousel8 from "./img-upscaling/carrousel/card-carrousel8.png";
import carrousel9 from "./img-upscaling/carrousel/card-carrousel9.png";
import carrousel10 from "./img-upscaling/carrousel/card-carrousel10.png";
import carrousel11 from "./img-upscaling/carrousel/card-carrousel11.png";
import carrousel12 from "./img-upscaling/carrousel/card-carrousel12.png";

function Carrousel() {
  return (
    <div>
      <div className="carousel-title-meet-us-container">
        <div className="carousel-title-meet-us">
          <h1 className="carousel-title-meet-us-text">
            {" "}
            Conoce a nuestro equipo!
          </h1>
        </div>
      </div>
      <div className="fog-effect"></div>
      <div className="fog-effect1"></div>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, A11y, Mousewheel, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        direction="horizontal"
        mousewheel={{
          invert: true, // Cambiar a false si quieres comportamiento natural
          sensitivity: 10,
          enabled: true,
          thresholdDelta: 10,
        }}
        loop={true}
        navigation
        autoplay={{
          delay: 1500, // Tiempo en milisegundos
          disableOnInteraction: false, // Si el autoplay debe detenerse al interactuar con el slider
        }}
        speed={500}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          // when window width is <= 600px (móviles)
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is <= 900px (tablets)
          900: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // when window width is > 900px (escritorio)
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide className="card1">
          <img src={carrousel1} alt="Empleado(1)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card2">
          <img src={carrousel2} alt="Empleado(2)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card3">
          <img src={carrousel3} alt="Empleado(3)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card4">
          <img src={carrousel4} alt="Empleado(4)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card5">
          <img src={carrousel5} alt="Empleado(5)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card6">
          <img src={carrousel6} alt="Empleado(6)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card7">
          <img src={carrousel7} alt="Empleado(7)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card8">
          <img src={carrousel8} alt="Empleado(8)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card9">
          <img src={carrousel9} alt="Empleado(9)" className="card-image"></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card10">
          <img
            src={carrousel10}
            alt="Empleado(10)"
            className="card-image"
          ></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card11">
          <img
            src={carrousel11}
            alt="Empleado(11)"
            className="card-image"
          ></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
        <SwiperSlide className="card12">
          <img
            src={carrousel12}
            alt="Empleado(12)"
            className="card-image"
          ></img>
          <div className="badge-container">
            <p className="badge">Metodología</p>
            <p className="badge">Contabilidad</p>
            <p className="badge">Derecho</p>
          </div>
          <h2 className="card-title">
            <p className="name-slider">Joe Skimo</p>"Pienso que los carruseles
            son una herramienta UI/UX poderosa, que ayuda a entender mejor el
            contenido de una página web..."
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carrousel;
