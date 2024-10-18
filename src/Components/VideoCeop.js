import React, { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./VideoCeop.css";

function VideoCeop() {
  const videoRef = useRef(null); // Referencia para el reproductor de video
  const containerRef = useRef(null); // Referencia para el contenedor del video
  // Función que se ejecuta cuando el video está listo
  const IsTheVideoReady = (controlador_video) => {
    videoRef.current = controlador_video.target;
    videoRef.current.cueVideoById("EZ9zyBuDyG8");
    console.log("Valores asignados correctamente");
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.playVideo();
            console.log("Video reproducido");
          } else {
            videoRef.current.pauseVideo();
            console.log("Video pausado");
          }
        }
      });
    };

    // Crear un IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.6, // El 50% del video debe ser visible para disparar el evento
    });

    if (containerRef.current) {
      observer.observe(containerRef.current); // Observar el contenedor del video
    }

    // Limpieza: dejar de observar cuando el componente se desmonte
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const opts = {
    height: "576",
    width: "1024",
    playerVars: {
        autoplay: 0,
        modestbranding: 1,
        rel: 0,
        loop: 1,       // Activar el loop (1 es encendido)
        playlist: "EZ9zyBuDyG8" // Se necesita la misma videoId para que el loop funcione
      },
  };
  return (
    <>
      <div className="video-ceop-section">
        <div ref={containerRef} className="video-container">
          <YouTube
            className="youtube-video"
            videoId="EZ9zyBuDyG8"
            opts={opts}
            onReady={IsTheVideoReady}
          />
        </div>
      </div>
    </>
  );
}

export default VideoCeop;
