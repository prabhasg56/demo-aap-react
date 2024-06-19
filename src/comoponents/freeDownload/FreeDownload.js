import React from 'react';
import './FreeDownload.css'; // Create this CSS file for styles
import midCard from "../../assets/midCard.svg"

const FreeDownload = () => {
    return (
        <div className="free-download-container">
            <div className="free-download-content">
                <img src={midCard} alt="Ebook cover" className="ebook-image" />
                <div className="download-details">
                    <h2>FREE DOWNLOAD!</h2>
                    <h3>FROM MID-LEVEL TO TOP MANAGEMENT "YOUR QUANTUM LEAP"</h3>
                    <div className="form-container">
                        <input type="text" placeholder="Name" className="input-field" />
                        <input type="email" placeholder="Email" className="input-field" />
                        <input type="text" placeholder="Phone" className="input-field" />
                        <button className="download-button">Get Your Ebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeDownload;
