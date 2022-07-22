import React from "react";
import Main from "../components/Main";
import HeaderMain from "./HeaderMain";
import axios from "axios";
import EstimatePrice from "./EstimatePrice";
import OurServices from "./OurServices";
import PricingPlan from "./PricingPlan";
import AboutUs from "./AboutUs";
import HowItWorks from "./HowItWorks";
import OurRecentWorks from "./OurRecentWorks";
import WhatOurClientsSay from "./WhatOurClientsSay";
import GetInTouch from "./GetInTouch";
import ValuesContainer from "./ValuesContainer";
import Footer from "./Footer";
import CountsContainer from "./CountsContainer";

axios.defaults.withCredentials = true;

const Hero = () => {
  return (
    <div>
      <div id="main">
        <HeaderMain />
        <Main />
        <EstimatePrice />
        <OurServices />
        <HowItWorks />
        <AboutUs />
        <OurRecentWorks />
        <WhatOurClientsSay />
        <CountsContainer />
        <GetInTouch />
        <ValuesContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
