import React from "react";
import "./EncourageSection.css";
import whyImage from "../../assets/encourage2.svg";
import blob from "../../assets/Blob.svg";

function EncourageSection2() {
  return (
    <section className="encourage-section">
      <div className="encourage-content">
        <div className="encourage-text">
          <h2 className="encourage-title">We Educate People -</h2>
          <p className="encourage-subtitle">With Right Awareness About:</p>
          <ul className="encourage-list">
            <li>How to start getting the Results They WANT</li>
            <li>
              How to Eliminate the factors obstructing them to Change their
              Results
            </li>
            <li>
              How to start doing things, they already know, to achieve what they
              want
            </li>
            <li>
              How To start using the powerful forces of the Universe in their
              favor
            </li>
            <li>
              How to become Unstoppable and Unshakeable under any adverse
              situation and still be in control. 
            </li>
            <p>Plus much, much more...</p>
          </ul>
        </div>
        <div className="encourage-image">
          <img src={blob} alt="Main" className="main-image" />
          <img src={whyImage} alt="Overlay" className="overlay-image" />
        </div>
      </div>
    </section>
  );
}

export default EncourageSection2;
