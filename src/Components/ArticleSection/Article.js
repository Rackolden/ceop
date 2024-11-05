import "./Article.css";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import article_video1 from "../img-upscaling/article_video/article_video1.jpg";
import article_video2 from "../img-upscaling/article_video/article_video2.jpg";
import article_video3 from "../img-upscaling/nosotros-cards/card-cover2.png";
import article_video4 from "../img-upscaling/article_video/article_video3.jpg";

const Article = () => {
  const [hoverStates, setHoverStates] = useState({
    stateArticle1: false,
    stateArticle2: false,
    stateArticle3: false,
    stateArticle4: false,
  });
  const handleMouseEnter = (stateArticle) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [stateArticle]: true,
    }));
  };
  const handleMouseLeave = (stateArticle) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [stateArticle]: false,
    }));
  };
  const divRef = useRef(null);
  const getWidth = () => (divRef.current ? divRef.current.clientWidth : 0);
  const getHeight = () => (divRef.current ? divRef.current.clientHeight : 0);
  // Funciones para obtener dimensiones exactas (usar solo en caso de emergencia)
  //const getWidth = () => (divRef.current ? divRef.current.getBoundingClientRect().width : 0);
  //const getHeight = () => (divRef.current ? divRef.current.getBoundingClientRect().height : 0);
  
  const [divDimensions, setDivDimensions] = useState({
    width: 0,
    height: 0,
  });
  const getDimensions = () => {
    if (divRef.current) {
      const newWidth = getWidth();
      const newHeight = getHeight();
      setDivDimensions({
        width: newWidth,
        height: newHeight,
      });
      console.log(`Width-artc: ${newWidth}\nHeight-artc: ${newHeight}`);
    }
  };
  useEffect(() => {
    getDimensions();
    const handleResize = () => {
      getDimensions();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Limpia al desmontar
    };
  }, []);

  return (
    <>
      <div className="article-section">
        <div className="cleared-article-section" ref={divRef}>
          <div
            className={`article-video-link cleared ${
              hoverStates.stateArticle1 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container cleared">
              <Link href="#">
                <img
                  src={article_video1}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle1");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle1");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle1 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container cleared">
              <Link
                className="video-article-title"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle1");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle1");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc ${
                  hoverStates.stateArticle1 ? "hovered1" : ""
                }`}
                href="#"
              >
                La IA transforma la investigación académica, facilitando la
                búsqueda, análisis y estructuración de datos.
              </Link>
            </div>
          </div>

          <div
            className={`article-video-link cleared ${
              hoverStates.stateArticle2 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container cleared">
              <Link href="#">
                <img
                  src={article_video2}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle2");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle2");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle2 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container cleared">
              <Link
                className="video-article-title"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle2");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle2");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc ${
                  hoverStates.stateArticle2 ? "hovered1" : ""
                }`}
                href="#"
              >
                La inteligencia artificial transforma la investigación
                académica, facilitando la búsqueda, análisis de datos y
                estructuración de tesis, optimizando precisión y calidad.
              </Link>
            </div>
          </div>
        </div>

        <div
          className="piled-article-section"
          style={{
            height: divDimensions.height,
            maxHeight: divDimensions.height,
            width: divDimensions.width,
            maxWidth: divDimensions.width,
            minWidth: divDimensions.width,
          }}
        >
          <div
            className={`article-video-link article-large ${
              hoverStates.stateArticle3 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container piled-v">
              <Link href="#">
                <img
                  src={article_video3}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle3");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle3");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle3 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container piled-v">
              <Link
                className="video-article-title"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle3");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle3");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc ${
                  hoverStates.stateArticle3 ? "hovered1" : ""
                }`}
                href="#"
              >
                La inteligencia artificial transforma la investigación
                académica, facilitando la búsqueda, análisis de datos y
                estructuración de tesis, optimizando precisión y calidad.
              </Link>
            </div>
          </div>

          <div
            className={`article-video-link article-large ${
              hoverStates.stateArticle4 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container piled-v">
              <Link href="#">
                <img
                  src={article_video4}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle4");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle4");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle4 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container piled-v">
              <Link
                className="video-article-title"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle4");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle4");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc ${
                  hoverStates.stateArticle4 ? "hovered1" : ""
                }`}
                href="#"
              >
                La inteligencia artificial transforma la investigación
                académica, facilitando la búsqueda, análisis de datos y
                estructuración de tesis, optimizando precisión y calidad.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
