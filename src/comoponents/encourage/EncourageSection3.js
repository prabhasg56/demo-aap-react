import React from 'react';
import './EncourageSection.css';
import whyImage from '../../assets/encourage3.svg'; 
import blob from '../../assets/Blob.svg';

function EncourageSection3() {
  return (
    <section className="encourage-section">
      <div className="encourage-content">
        <div className="encourage-image">
          <img src={blob} alt="Main" className="main-image" />
          <img src={whyImage} alt="Overlay" className="overlay-image" />
        </div>
        <div className="encourage-text">
          <h2 className="encourage-title">We Empower People - 
          </h2>
          <p className="encourage-subtitle">With Right Resources:</p>
          <ul className="encourage-list">
            <li>Learning Modules</li>
            <li>Actionable Guides</li>
            <li>Skills and Strategies for Quantum Leaps</li>
            <li>Accountability Mechanisms</li>
            <li>Community and Networking</li>
            <li>Ongoing Support To keep them going in the face of adversities</li>
            <p>Plus much, much more...</p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EncourageSection3;


