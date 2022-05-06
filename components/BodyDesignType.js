import React, { useState } from "react";
import styles from "../styles/BodyDesignType.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

const BodyDesignType = () => {
  const [designType, setDesignType] = useState("");

  const contemporaryClick = () => {
    setDesignType("Contemporary House");
  };

  const traditionalClick = () => {
    setDesignType("Traditional House");
  };

  const ecoFriendlyClick = () => {
    setDesignType("Eco Friendly House");
  };

  const vernecularClick = () => {
    setDesignType("Vernacular Architecture House");
  };

  const minimalClick = () => {
    setDesignType("Minimal Design House");
  };

  const openFloorClick = () => {
    setDesignType("Open Floor Plan House");
  };

  const energyClick = () => {
    setDesignType("Net zero residence/energy efficient");
  };

  const colonialClick = () => {
    setDesignType(" Colonial style House");
  };

  const onNextClick = () => {
    if (designType === "") {
      document.getElementById("error_designType").style.display = "block";
    } else {
      document.getElementById("loaderNext").style.display = "block";
      document.getElementById("nextText").style.display = "none";

      localStorage.setItem("designType", designType);

      window.location.href = "/planyourself";
    }
  };

  return (
    <div className={styles.bodyDesignType}>
      <Header />
      <div
        className={styles.bodyDesignType__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Type of Design</h3>
        <p>Choose your requirements</p>
        <div className={styles.cards__container__designType}>
          <div onClick={contemporaryClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/contemporary.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Contemporary <br /> House
            </p>
          </div>
          <div onClick={traditionalClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Traditional <br /> House
            </p>
          </div>
          <div onClick={ecoFriendlyClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/eco.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Eco Friendly <br /> House
            </p>
          </div>
          <div onClick={vernecularClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Vernacular Architecture <br /> House
            </p>
          </div>
        </div>
        <div className={styles.cards__container__designType}>
          <div onClick={minimalClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/contemporary.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Minimal Design <br /> House
            </p>
          </div>
          <div onClick={openFloorClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Open Floor Plan <br /> House
            </p>
          </div>
          <div onClick={energyClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/eco.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>Net zero residence/energy efficient</p>
          </div>
          <div onClick={colonialClick} className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Colonial style
              <br /> House
            </p>
          </div>
        </div>
        <div onClick={onNextClick} className={styles.next__button}>
          <div className={styles.loader__container__next} id="loaderNext">
            <PulseLoader color="#ffffff" />
          </div>
          <p id="nextText">NEXT</p>
        </div>
        <h5 id="error_designType" className={styles.error__designType}>
          Please Select a Design Type
        </h5>
        <Link href="/planyourself" passHref>
          <p className={styles.skipForNow}>Skip for now &gt;&gt;</p>
        </Link>
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

export default BodyDesignType;
