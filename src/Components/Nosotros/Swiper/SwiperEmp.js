import styles from "./SwiperEmp.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import swiper1 from "../../Images/swiper/swiper1.png";
import swiper2 from "../../Images/swiper/swiper2.png";
import swiper3 from "../../Images/swiper/swiper3.png";
import swiper4 from "../../Images/swiper/swiper4.png";
import swiper5 from "../../Images/swiper/swiper5.png";
import swiper6 from "../../Images/swiper/swiper6.png";
import swiper7 from "../../Images/swiper/swiper7.png";
import swiper8 from "../../Images/swiper/swiper8.png";
import swiper9 from "../../Images/swiper/swiper9.png";
import swiper10 from "../../Images/swiper/swiper10.png";
import swiper11 from "../../Images/swiper/swiper11.png";
import swiper12 from "../../Images/swiper/swiper12.png";

function SwiperEmp() {
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

      <div className="swiper-container">
        <div className="fog-effect-container">
          <div className="fog-effect fe1"></div>
          <div className="fog-effect fe2"></div>
        </div>
        <Swiper
          className="mySwiper"
          modules={[Navigation, A11y, Mousewheel, Autoplay]}
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
            delay: 2000, // Tiempo en milisegundos
            disableOnInteraction: false, // Si el autoplay debe detenerse al interactuar con el slider
          }}
          speed={500}
          breakpoints={{
            720: {
              slidesPerView: 1.5,
              spaceBetween: 5,
            },
            800: {
              slidesPerView: 1.75,
              spaceBetween: 5,
            },
            1000: {
              slidesPerView: 3.25,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 15,
            },
            // when window width is > 1300px (escritorio)
            1300: {
              slidesPerView: 4.625,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className="card1">
            <img
              src={swiper1}
              alt="Empleado(1)"
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
          <SwiperSlide className="card2">
            <img
              src={swiper2}
              alt="Empleado(2)"
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
          <SwiperSlide className="card3">
            <img
              src={swiper3}
              alt="Empleado(3)"
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
          <SwiperSlide className="card4">
            <img
              src={swiper4}
              alt="Empleado(4)"
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
          <SwiperSlide className="card5">
            <img
              src={swiper5}
              alt="Empleado(5)"
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
          <SwiperSlide className="card6">
            <img
              src={swiper6}
              alt="Empleado(6)"
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
          <SwiperSlide className="card7">
            <img
              src={swiper7}
              alt="Empleado(7)"
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
          <SwiperSlide className="card8">
            <img
              src={swiper8}
              alt="Empleado(8)"
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
          <SwiperSlide className="card9">
            <img
              src={swiper9}
              alt="Empleado(9)"
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
          <SwiperSlide className="card10">
            <img
              src={swiper10}
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
              src={swiper11}
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
              src={swiper12}
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
    </div>
  );
}

export default SwiperEmp;