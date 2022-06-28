import React from "react";
// import ProductHighlightCard from "../ProductHighlightCard/ProductHighlightCard";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="image-slider-container">
        <span className="left-image-container">
          <img
            src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-10.png&w=3840&q=100"
            alt=""
          />
        </span>
        <span className="right-image-container">
          <img
            src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-11.png&w=1920&q=100"
            alt=""
          />
        </span>
      </div>

    </div>
  );
};

export default Main;
