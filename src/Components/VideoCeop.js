import React, { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./VideoCeop.css";

function VideoCeop() {
  const videoRef = useRef(null); // Referencia para el reproductor de video
  const containerRef = useRef(null); // Referencia para el contenedor del video
  // Función que se ejecuta cuando el video está listo
  const IsTheVideoReady = (controlador_video) => {
    videoRef.current = controlador_video.target;
    videoRef.current.cueVideoById("gwaWKvBvAVg");
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
      threshold: 0.9, // El 50% del video debe ser visible para disparar el evento
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

  //Función que hace resize al <Youtube>
  const [videoOptions, setVideoOptions] = useState({
    height: "576",
    width: "1024",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  });

  const [videoContainer, setVideoContainer] = useState({
    height: "616px",
    width: "1064px",
  });

  const [newWidth, setNewWidth] = useState(0); // Estado para newWidth
  const [newHeight, setNewHeight] = useState(0); // Estado para newHeight

  const updateVideoDimensions = () => {
    if (videoRef.current) {
      const viewportWidth = window.innerWidth;
      let calculatedWidth = undefined,
        calculatedHeight = undefined;

      if (viewportWidth <= 720) {
        calculatedWidth = viewportWidth * 0.85;
      } else if (viewportWidth > 720 && viewportWidth <= 820) {
        calculatedWidth = viewportWidth * 0.8;
      } else if (viewportWidth > 820 && viewportWidth <= 1000) {
        calculatedWidth = viewportWidth * 0.75;
      } else if (viewportWidth > 1000 && viewportWidth <= 1200) {
        calculatedWidth = viewportWidth * 0.7;
      } else if (viewportWidth > 1200) {
        calculatedWidth = viewportWidth * 0.65;
      }

      calculatedHeight = calculatedWidth * (9 / 16);

      setNewWidth(calculatedWidth);
      setNewHeight(calculatedHeight);

      setVideoOptions((prevOpts) => ({
        ...prevOpts,
        height: newHeight.toFixed(0), // toFixed(0) sirve para mantener los valores redondeados
        width: newWidth.toFixed(0),
      }));
    }
  };

  const updateVideoContainerDimensions = () => {
    let widthVideoContainer = undefined,
      heightVideoContainer = undefined;

    widthVideoContainer = Math.round(newWidth + 20);
    heightVideoContainer = Math.round(newHeight + 20);

    //Hacer resize al box del vídeo
    setVideoContainer((prevOpts) => ({
      ...prevOpts,
      height: `${heightVideoContainer}px`, // Convertir a string con "px"
      width: `${widthVideoContainer}px`,
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      updateVideoDimensions();
      updateVideoContainerDimensions();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Inicializa al cargar

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia al desmontar
    };
  }, [newWidth, newHeight]); //Se utiliza newWidth y NewHeight como dependencias porque son los valores del video size los que determinan el tamaño del box y otros elementos

  return (
    <>
      <div className="video-ceop-section">
        <div className="bars-global-container">
          <div className="bars-right-container">
            <div className="bars-right"></div>
            <div className="bars-right"></div>
            <div className="bars-right"></div>
          </div>
          <div className="bars-left-container">
            <div className="bars-left"></div>
            <div className="bars-left"></div>
            <div className="bars-left"></div>
          </div>
        </div>

        <div
          ref={containerRef}
          style={{ height: videoContainer.height, width: videoContainer.width }}
          className="video-container"
        >
          <YouTube
            className="youtube-video"
            videoId="gwaWKvBvAVg"
            opts={videoOptions}
            onReady={IsTheVideoReady}
          />
        </div>
      </div>
    </>
  );
}

export default VideoCeop;
