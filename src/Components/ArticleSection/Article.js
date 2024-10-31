import "./Article.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import article_video1 from "../img-upscaling/article_video/article_video1.jpg";
import article_video2 from "../img-upscaling/article_video/article_video2.jpg";
import article_video3 from "../img-upscaling/nosotros-cards/card-cover2.png";
import article_video4 from "../img-upscaling/article_video/article_video3.jpg";

function Article() {
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

  return (
    <>
      <div className="article-section">
        <div
          className={`article-video-link ${
            hoverStates.stateArticle1 ? "hovered1" : ""
          }`}
        >
          <div className="video-article-image-container">
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
          <div className="video-article-text-container">
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
          className={`article-video-link ${
            hoverStates.stateArticle2 ? "hovered1" : ""
          }`}
        >
          <div className="video-article-image-container">
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
          <div className="video-article-text-container">
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
              La inteligencia artificial transforma la investigación académica,
              facilitando la búsqueda, análisis de datos y estructuración de
              tesis, optimizando precisión y calidad.
            </Link>
          </div>
        </div>

        <div
          className={`article-video-link article-large ${
            hoverStates.stateArticle3 ? "hovered1" : ""
          }`}
        >
          <div className="video-article-image-container">
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
          <div className="video-article-text-container">
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
              La inteligencia artificial transforma la investigación académica,
              facilitando la búsqueda, análisis de datos y estructuración de
              tesis, optimizando precisión y calidad.
            </Link>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Article;
