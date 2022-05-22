import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Main.module.css";
import Main from "../components/Main";
import MainMobile from "./MainMobile";
import Secondary from "./Secondary";
import Quotes from "./Quotes";
import Footer from "./Footer";
import RecentWork from "./RecentWork";
import HeaderMain from "./HeaderMain";
import Header from "./Header";

const Hero = () => {
  /* REMEMBER */
  let launchDate = new Date("May 22, 2022 19:30:00").getTime();

  const tick = () => {
    let now = new Date().getTime();
    let t = launchDate - now;
    if (t > 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (days < 10) {
        days = "0" + days;
      }
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) {
        hours = "0" + hours;
      }
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) {
        mins = "0" + mins;
      }
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) {
        secs = "0" + secs;
      }
      let time = `${days} : ${hours} : ${mins} : ${secs}`;
      document.getElementById("countdown").innerHTML = time;
      document.getElementById("main").style.display = "none";
      document.getElementById("mainMobile").style.display = "none";
    } else {
      document.getElementById("countDownContainer").style.display = "none";
      if (window.innerWidth <= 500) {
        document.getElementById("main").style.display = "none";
        document.getElementById("mainMobile").style.display = "flex";
      } else {
        document.getElementById("mainMobile").style.display = "none";
        document.getElementById("main").style.display = "block";
      }
    }
  };

  let timer = setInterval(tick, 1000);

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

      <div
        style={{ backgroundImage: `url("/countDown.png")` }}
        className={styles.counterContainer}
        id="countDownContainer"
      >
        <Header />
        <div className={styles.section__counterContainer}>
          <div className={styles.left__counterContainer}>
            <h1>
              <span>AGRIHA</span> LAUNCHING
            </h1>
            <div className={styles.days}>
              <h5>Days</h5>
              <h5>Hours</h5>
              <h5>Minutes</h5>
              <h5 style={{ marginLeft: "-10px" }}>Seconds</h5>
            </div>
            <div className={styles.timer} id="countdown">
              00 : 00 : 00 : 00
            </div>
          </div>
          <div className={styles.right__counterContainer}>
            <div className={styles.rocket}>
              <Image src="/rocket.png" alt="" width={200} height={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
