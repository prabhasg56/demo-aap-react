import React from "react";

import "./Precedes.css";
import preced from "../../assets/preced.svg";

function Precedes() {
  return (
    <div>
      <div style={{ width: "1440px", height: "618px" }}>
        <img src={preced} alt="preced" />
      </div>

      <div style={{height:"604px"}}>
        <p style={{fontWeight:"500px", lineHeight:"37px", alignItems:"center", padding:"25px", fontSize:"32px"}}>
          We believe most people want to earn more money, enjoy more freedom,
          live in a healthy body, lead a life of fulfillment, and give back to
          society. But we know it doesn’t happen by accident. Chirag’s teachings
          and strategies are built on the premise that we have an extremely
          powerful force flowing to and through us that is far more superior
          than any other force the human race has ever been exposed to. And By
          Learning To Control The Flow Of This Power, We Can Tap Into Our Real
          Potential and Create The Future We Want with Absolute Certainty. We
          believe in demonstrating to our people how to effectively and
          intelligently direct this Powerful force to achieve whatever results
          they choose in this lifetime.
        </p>
      </div>
    </div>
  );
}

export default Precedes;
