import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

const imgArr = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
];

export const Carousel = () => {
  const [img, setImg] = useState(0);

  const prevImg = () => {
    setImg(img === 0 ? imgArr.length - 1 : img - 1);
  };

  const nextImg = () => {
    setImg(img === imgArr.length - 1 ? 0 : img + 1);
  };
  return (
    <div className="slider">
      <button onClick={prevImg} className="left-arrow">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="slide">
        {imgArr.map(
          (image, index) => img === index && <img src={image} alt={image} />
        )}
      </div>
      <button onClick={nextImg} className="right-arrow">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
