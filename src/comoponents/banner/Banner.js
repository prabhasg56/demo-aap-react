import React from "react";
import "./Banner.css";
import bannerImage from "../../assets/man.svg";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>EMPOWERING PEOPLE AROUND THE WORLD</h1>
        <h2>TO CREATE THE RESULTS </h2>
        <h2>THEY WANT</h2>
      </div>

      <div className="banner-image">
        <img src={bannerImage} alt="Chirag Kansal" />
      </div>
    </section>
  );
}

export default Banner;
