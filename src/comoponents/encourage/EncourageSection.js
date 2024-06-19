import React from 'react';
import './EncourageSection.css';
import whyImage from '../../assets/encourage.svg'; 
import blob from '../../assets/Blob.svg';

function EncourageSection() {
  return (
    <section className="encourage-section">
      <div className="encourage-content">
        <div className="encourage-image">
          <img src={blob} alt="Main" className="main-image" />
          <img src={whyImage} alt="Overlay" className="overlay-image" />
        </div>
        <div className="encourage-text">
          <h2 className="encourage-title">We Encourage People -</h2>
          <p className="encourage-subtitle">With Right Understanding About:</p>
          <ul className="encourage-list">
            <li>Why Are They Getting The Results They "Do Not Want"?</li>
            <li>Why Even After Trying So Hard, Their Results "Don't Change"?</li>
            <li>Why They Are "NOT" Doing Things They Already Know, To Achieve Whatever They Want?</li>
            <li>Why They Are Using The Powerful Forces Of The Universe Against Themselves?</li>
            <li>Why They Are STUCK, Even After Having Every Tool Ever Needed To Achieve What They Want?</li>
            <p>Plus much, much more...</p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EncourageSection;

