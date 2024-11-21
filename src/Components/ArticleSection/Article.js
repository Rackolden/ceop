import "./Article.css";
import _ from "lodash";
import React, { useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import article1 from "../Images/article/article1.webp";
import article2 from "../Images/article/article2.webp";
import article3 from "../Images/article/article3.webp";
import article4 from "../Images/article/article4.webp";
import article5 from "../Images/article/article5.webp";
import article6 from "../Images/article/article6.webp";
import article7 from "../Images/article/article7.webp";
import article8 from "../Images/article/article8.webp";

const Article = () => {
  const [hoverStates, setHoverStates] = useState({
    stateArticle1: false,
    stateArticle2: false,
    stateArticle3: false,
    stateArticle4: false,
    stateArticle5: false,
    stateArticle6: false,
    stateArticle7: false,
    stateArticle8: false,
    stateArticle9: false,
    stateArticle10: false,
    stateArticle11: false,
    stateArticle12: false,
    stateArticle13: false,
    stateArticle14: false,
    stateArticle15: false,
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

  const [divDimensions, setDivDimensions] = useState({
    width: 0,
    height: 0,
  });
  const debouncedGetDimensions = _.debounce(() => {
    if (divRef.current) {
      const newWidth = divRef.current.offsetWidth;
      const newHeight = divRef.current.offsetHeight;
      setDivDimensions({
        width: newWidth,
        height: newHeight,
      });
      console.log(`Width: ${newWidth}, Height: ${newHeight}`);
    }
  }, 500);

  useEffect(() => {
    const handleResize = () => {
      debouncedGetDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      debouncedGetDimensions.cancel(); // Cleanup
    };
  }, [debouncedGetDimensions]);

  return (
    <>
      <div className="article-section">
        {/*Married Articles*/}

        <div className="cleared-article-section" ref={divRef}>
          <div
            className={`article-video-link cleared ${
              hoverStates.stateArticle1 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container cleared">
              <Link href="#">
                <img
                  src={article1}
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
                  src={article2}
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
                  src={article3}
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
                className="video-article-title piled-v"
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
                className={`video-article-desc piled-v ${
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
                  src={article4}
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
                className="video-article-title piled-v"
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
                className={`video-article-desc piled-v ${
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

        <div className="cleared-article-section">
          <div
            className={`article-video-link cleared ${
              hoverStates.stateArticle5 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container cleared">
              <Link href="#">
                <img
                  src={article5}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle5");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle5");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle5 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container cleared">
              <Link
                className="video-article-title"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle5");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle5");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc ${
                  hoverStates.stateArticle5 ? "hovered1" : ""
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
              hoverStates.stateArticle6 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container cleared">
              <Link href="#">
                <img
                  src={article6}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle6");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle6");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle6 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container cleared">
              <Link
                className="video-article-title"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle6");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle6");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc ${
                  hoverStates.stateArticle6 ? "hovered1" : ""
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
              hoverStates.stateArticle7 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container piled-v">
              <Link href="#">
                <img
                  src={article7}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle7");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle7");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle7 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container piled-v">
              <Link
                className="video-article-title piled-v"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle7");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle7");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc piled-v ${
                  hoverStates.stateArticle7 ? "hovered1" : ""
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
              hoverStates.stateArticle8 ? "hovered1" : ""
            }`}
          >
            <div className="video-article-image-container piled-v">
              <Link href="#">
                <img
                  src={article8}
                  alt="imagen del artículo"
                  onMouseEnter={() => {
                    handleMouseEnter("stateArticle8");
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("stateArticle8");
                  }}
                  className={`video-article-image ${
                    hoverStates.stateArticle8 ? "hovered1" : ""
                  }`}
                ></img>
              </Link>
            </div>
            <div className="video-article-text-container piled-v">
              <Link
                className="video-article-title piled-v"
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle8");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle8");
                }}
              >
                ELABORACIÓN DE TÉSIS ACADÉMICAS USANDO IA
              </Link>
              <Link
                className={`video-article-desc piled-v ${
                  hoverStates.stateArticle8 ? "hovered1" : ""
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

        {/*Single article lmao*/}

        <div
          className={`article-video-link single ${
            hoverStates.stateArticle9 ? "hovered1" : ""
          }`}
          style={{
            height: divDimensions.height,
            width: divDimensions.width,
            position: "relative",
          }}
        >
          <Link href="#">
            <img
              alt="imagen del artículo"
              src={article4}
              onMouseEnter={() => {
                handleMouseEnter("stateArticle9");
              }}
              onMouseLeave={() => {
                handleMouseLeave("stateArticle9");
              }}
              className={`video-article-image ${
                hoverStates.stateArticle9 ? "hovered1" : ""
              }`}
            ></img>
          </Link>
          <div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "10px",
              color: "white",
              zIndex: "1",
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "100%",
                paddingBottom: "5px",
              }}
            >
              Texto de Relleno
            </p>
            <Link
              className="single-article-title"
              style={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: "600" }}
            >
              TÍTULO DEL ARTÍCULO SIN TEXTO DE PRESENTACIÓN
            </Link>
          </div>
        </div>

        {/*Single Articles Cleared Section*/}
        <div
          className="cleared-article-section"
          style={{
            height: divDimensions.height,
            width: divDimensions.width,
            maxHeight: divDimensions.height,
            maxWidth: divDimensions.width,
          }}
        >
          <div
            className={`article-video-link single half ${
              hoverStates.stateArticle10 ? "hovered1" : ""
            }`}
            style={{
              position: "relative",
            }}
          >
            <Link href="#">
              <img
                alt="imagen del artículo"
                src={article5}
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle10");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle10");
                }}
                className={`video-article-image ${
                  hoverStates.stateArticle10 ? "hovered1" : ""
                }`}
              ></img>
            </Link>
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "10px",
                color: "white",
                zIndex: "1",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "100%",
                  paddingBottom: "5px",
                }}
              >
                Texto de Relleno
              </p>
              <Link
                className="single-article-title"
                style={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: "600" }}
              >
                TÍTULO DEL ARTÍCULO SIN TEXTO DE PRESENTACIÓN
              </Link>
            </div>
          </div>

          <div
            className={`article-video-link single half ${
              hoverStates.stateArticle11 ? "hovered1" : ""
            }`}
            style={{
              position: "relative",
            }}
          >
            <Link href="#">
              <img
                alt="imagen del artículo"
                src={article6}
                onMouseEnter={() => {
                  handleMouseEnter("stateArticle11");
                }}
                onMouseLeave={() => {
                  handleMouseLeave("stateArticle11");
                }}
                className={`video-article-image ${
                  hoverStates.stateArticle11 ? "hovered1" : ""
                }`}
              ></img>
            </Link>
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "10px",
                color: "white",
                zIndex: "1",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "100%",
                  paddingBottom: "5px",
                }}
              >
                Texto de Relleno
              </p>
              <Link
                className="single-article-title"
                style={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: "600" }}
              >
                TÍTULO DEL ARTÍCULO SIN TEXTO DE PRESENTACIÓN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
