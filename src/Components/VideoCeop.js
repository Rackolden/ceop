import React, { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./VideoCeop.css";

const calcularAnchoVideo = () => {
  const anchoVideo = window.innerWidth;

  if (anchoVideo <= 720) {
    return anchoVideo * 0.85;
  } else if (anchoVideo > 720 && anchoVideo <= 820) {
    return anchoVideo * 0.8;
  } else if (anchoVideo > 820 && anchoVideo <= 1000) {
    return anchoVideo * 0.75;
  } else if (anchoVideo > 1000 && anchoVideo <= 1200) {
    return anchoVideo * 0.7;
  } else if (anchoVideo > 1200) {
    return anchoVideo * 0.65;
  }
};

const calcularAltoVideo = () => {
  const ancho = calcularAnchoVideo();
  console.log(ancho);
  return (ancho * 9) / 16;
};

const addedMargin = 17.5;

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
      threshold: 0.9,
    });
    // Copia de containerRef.current
    const currentContainer = containerRef.current;

    // Comenzar a observar el contenedor
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    // Limpieza: dejar de observar cuando el componente se desmonte
    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const [newWidth, setNewWidth] = useState(calcularAnchoVideo()); // Estado para newWidth
  const [newHeight, setNewHeight] = useState(calcularAltoVideo()); // Estado para newHeight
  const [videoOptions, setVideoOptions] = useState({
    height: `${newHeight}px`,
    width: `${newWidth}px`,
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  });
  const [videoContainer, setVideoContainer] = useState({
    height: `${newHeight + addedMargin}px`,
    width: `${newWidth + addedMargin}px`,
    minHeight: `${newHeight + addedMargin}px`,
    minWidth: `${newWidth + addedMargin}px`,
  });
  const updateVideoDimensions = () => {
    if (videoRef.current) {
      const calcWidth = calcularAnchoVideo();
      const calcHeight = calcularAltoVideo();

      setNewWidth(calcWidth);
      setNewHeight(calcHeight);
      setVideoOptions({
        height: `${calcHeight}px`,
        width: `${calcWidth}px`,
      });
      setVideoContainer({
        height: `${calcHeight + addedMargin}px`,
        width: `${calcWidth + addedMargin}px`,
        minHeight: `${calcHeight + addedMargin}px`,
        minWidth: `${calcWidth + addedMargin}px`,
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateVideoDimensions();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Inicializa al cargar

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [newWidth, newHeight]);

  return (
    <>
      <div className="video-ceop-section">
        <div
          ref={containerRef}
          style={{
            height: videoContainer.height,
            width: videoContainer.width,
            minHeight: videoContainer.minHeight,
            minWidth: videoContainer.minWidth,
          }}
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
