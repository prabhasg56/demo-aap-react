import React from "react";
import "./SeenUs.css";
import national_age from "../../assets/national_age.svg";
import fortune_india_logo from "../../assets/fortune_india_logo.svg";
import dailyhunt_logo_white from "../../assets/dailyhunt-logo-white.svg";
import business_standard_1 from "../../assets/business_standard_1.svg";
import The_Telegraph_India from "../../assets/The_Telegraph_India.svg";
import Hindustan_Saga_Logo from "../../assets/Hindustan-Saga-Logo.svg";
import Entrepreneur_Saga from "../../assets/Entrepreneur-Saga.svg";
import outlook_logo from "../../assets/outlook_logo.svg";

function SeenUs() {
  return (
    <>
      <div className="leveraging">
        <h2 style={{ fontSize: "45px", fontWeight: 700, lineHeight: "54.5px" }}>
          BY LeveragING The Power Of Their Mind
        </h2>
      </div>
      <div className="seen-us">
        <h3 style={{ fontSize: "32px", fontWeight: 750, lineHeight: "45px" }}>
          You’ve seen us on
        </h3>
        <div style={{ marginTop: "-15px" }}>
          <img src={outlook_logo} alt="outlook logo" />
          <img src={national_age} alt="National Age" />
          <img src={fortune_india_logo} alt="Fortune" />
          <img src={dailyhunt_logo_white} alt="Dailyhunt" />
          <img src={business_standard_1} alt="Business Standard" />
          <img src={The_Telegraph_India} alt="The Telegraph" />
          <img src={Entrepreneur_Saga} alt="Entrepreneur" />
          <img src={Hindustan_Saga_Logo} alt="Hindustan" />
        </div>
      </div>
    </>
  );
}

export default SeenUs;
