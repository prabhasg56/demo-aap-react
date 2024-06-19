import React from "react";
import "./PurposeSection.css";
import videoThumbnail from "../../assets/purpose.svg"; // Add the path to your image file

function PurposeSection() {
  return (
    <section className="purpose-section">
      <div className="purpose-content">
        <div style={{width:"524px"}}>
          <h2 className="purpose-title">OUR PURPOSE</h2>
          <p className="purpose-description">
            Is to encourage, educate and empower people of the modern world to
            become a master of the mind that will reward them with the
            achievement of the results they want.
          </p>
        </div>
        <div className="purpose-video">
          <img src={videoThumbnail} alt="Purpose Video Thumbnail" />
          <div className="play-button">▶</div>
        </div>
      </div>
      <div className="purpose-quote">
        <p className="quote">
          “OUR PURPOSE IS OUR NORTH STAR TO TOUCH LIVES AND SHARE OUR GIFTS
          GLOBALLY”
        </p>
        <p className="quote-by" >- Chirag Kansal</p>
      </div>
    </section>
  );
}

export default PurposeSection;
