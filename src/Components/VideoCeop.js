import React, { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./VideoCeop.css";

function VideoCeop() {
    const videoRef = useRef(null);
    const [isReady, setIsReady] = useState(false); // Añadir estado para verificar si el video está listo

    const opts = {
        height: '621',
        width: '1104',
        playerVars: {
            autoplay: 0,
        },
    };

    const onReady = (event) => {
        videoRef.current = event.target;
        setIsReady(true);  // Marcar que el video está listo
    };

    useEffect(() => {
        if (isReady && videoRef.current) {  // Esperar hasta que el video esté listo
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        videoRef.current.playVideo();  // Reproduce el video si está en el viewport
                    } else {
                        videoRef.current.pauseVideo();  // Pausa el video si sale del viewport
                    }
                },
                { threshold: 0.5 }
            );

            const videoElement = document.querySelector('.youtube-video');
            if (videoElement) {
                observer.observe(videoElement);
            }

            return () => {
                if (videoElement) {
                    observer.unobserve(videoElement);
                }
            };
        }
    }, [isReady]);  // Asegurarse de que el efecto se ejecute solo cuando el video esté listo

    return (
      <>
        <div className="video-ceop-section">
          <div className="video-container">
            <YouTube
                className="youtube-video"
                videoId="EZ9zyBuDyG8"
                opts={opts}
                onReady={onReady} 
            />
          </div>
        </div>
      </>
    );
}

export default VideoCeop;