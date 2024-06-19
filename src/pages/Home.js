import React from "react";
import Header from "../comoponents/header/Header";
import Banner from "../comoponents/banner/Banner";
import SeenUs from "../comoponents/seenUs/SeenUs";
import PurposeSection from "../comoponents/purposeSection/PurposeSection";
import EncourageSection from "../comoponents/encourage/EncourageSection";
import EncourageSection3 from "../comoponents/encourage/EncourageSection3";
import EncourageSection2 from "../comoponents/encourage/EncourageSection2";
import Precedes from "../comoponents/precedes/Precedes";
import Footer from "../comoponents/footer/Footer";
import AboutMaster from "../comoponents/aboutMaster/AboutMaster";
import FreeDownload from "../comoponents/freeDownload/FreeDownload";
import SuccessStory from "../comoponents/successStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SeenUs />
      <PurposeSection />
      <EncourageSection />
      <EncourageSection2 />
      <EncourageSection3 />
      {/* <Precedes/> */}
      <AboutMaster />
      <FreeDownload />
      <SuccessStory/>
      <Footer />
    </div>
  );
};

export default Home;
