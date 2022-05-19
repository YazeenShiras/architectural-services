import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/BodySuccess.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import { PulseLoader } from "react-spinners";
import HeaderMain from "./HeaderMain";

const BodySuccess = () => {
  const successClick = () => {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";
  };
  return (
    <div className={styles.bodySuccess}>
      <HeaderMain />
      <div
        className={styles.bodySuccess__container}
        style={{
          backgroundImage: `url('/hero3.png')`,
        }}
      >
        <div className={styles.bodyDetails__content}>
          <div className={styles.success__container}>
            <p>
              your payment was successful <br />
              Check your mail for <br /> confirmation
            </p>
            <div className={styles.animation__container}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/sucess.svg"
                alt=""
                width={300}
                height={350}
              ></Image>
            </div>
            <Link href="/login" passHref>
              <div
                onClick={successClick}
                className={styles.continue__button__success}
              >
                <div className={styles.loader__container__next} id="loaderNext">
                  <PulseLoader color="#ffffff" />
                </div>
                <p id="nextText">CONTINUE TO LOGIN</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footer__container}>
        <Footer />
      </div>
      <div className={styles.footer__container__mobile}>
        <FooterMobile />
      </div>
    </div>
  );
};

export default BodySuccess;
