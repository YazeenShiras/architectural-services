import React from "react";
import styles from "../styles/Main.module.css";
import Main from "../components/Main";
import Header from "./Header";
import MainMobile from "./MainMobile";
import Secondary from "./Secondary";
import Quotes from "./Quotes";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Header />
      <div className={styles.webView}>
        <Main />
        <Secondary />
        <Quotes />
        <Footer />
      </div>
      <div className={styles.mobileView}>
        <MainMobile />
      </div>
    </div>
  );
};

export default Hero;