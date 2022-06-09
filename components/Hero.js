import React, { useEffect } from "react";
import styles from "../styles/Main.module.css";
import Main from "../components/Main";
import MainMobile from "./MainMobile";
import Secondary from "./Secondary";
import Quotes from "./Quotes";
import Footer from "./Footer";
import RecentWork from "./RecentWork";
import HeaderMain from "./HeaderMain";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

axios.defaults.withCredentials = true;

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div id="main" className={styles.webView}>
        <HeaderMain />
        <Main />
        <Secondary />
        <RecentWork />
        <Quotes />
        <Footer />
      </div>
      <div id="mainMobile" className={styles.mobileView}>
        <HeaderMain />
        <MainMobile />
      </div>
    </div>
  );
};

export default Hero;
