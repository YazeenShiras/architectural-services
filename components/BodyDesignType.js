import React, { useState } from "react";
import styles from "../styles/BodyDesignType.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import { PulseLoader } from "react-spinners";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const BodyDesignType = () => {
  var authenticated = true;

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    authenticated = true;
  }
  if (!accessToken) {
    authenticated = false;
  }

  const [designType, setDesignType] = useState("");

  const contemporaryClick = () => {
    setDesignType("Contemporary House");
    document.getElementById("contemporary").style.backgroundColor = "#1c9c76";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("netZero").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#ffffff";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const traditionalClick = () => {
    setDesignType("Traditional House");
    document.getElementById("traditional").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("netZero").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#ffffff";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const ecoFriendlyClick = () => {
    setDesignType("Eco Friendly House");
    document.getElementById("ecoFriendly").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("netZero").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#ffffff";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const vernecularClick = () => {
    setDesignType("Vernacular Architecture House");
    document.getElementById("vernicular").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("netZero").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#ffffff";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const minimalClick = () => {
    setDesignType("Minimal Design House");
    document.getElementById("minimal").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("netZero").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#ffffff";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const openFloorClick = () => {
    setDesignType("Open Floor Plan House");
    document.getElementById("openFloor").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("netZero").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#ffffff";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const energyClick = () => {
    setDesignType("Net zero residence/energy efficient");
    document.getElementById("netZero").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("colonial").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#ffffff";
    document.getElementById("colonialText").style.color = "#606060";
  };

  const colonialClick = () => {
    setDesignType(" Colonial style House");
    document.getElementById("colonial").style.backgroundColor = "#1c9c76";
    document.getElementById("netZero").style.backgroundColor = "#1c9c76";
    document.getElementById("contemporary").style.background = "none";
    document.getElementById("traditional").style.background = "none";
    document.getElementById("ecoFriendly").style.background = "none";
    document.getElementById("vernicular").style.background = "none";
    document.getElementById("minimal").style.background = "none";
    document.getElementById("openFloor").style.background = "none";
    document.getElementById("netZero").style.background = "none";

    document.getElementById("contemporaryText").style.color = "#606060";
    document.getElementById("temporaryText").style.color = "#606060";
    document.getElementById("ecoText").style.color = "#606060";
    document.getElementById("vernicularText").style.color = "#606060";
    document.getElementById("minimalText").style.color = "#606060";
    document.getElementById("openFloorText").style.color = "#606060";
    document.getElementById("netZeroText").style.color = "#606060";
    document.getElementById("colonialText").style.color = "#ffffff";
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
          <div
            onClick={contemporaryClick}
            id="contemporary"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/contemporary.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="contemporaryText">
              Contemporary <br /> House
            </p>
          </div>
          <div
            onClick={traditionalClick}
            id="traditional"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="temporaryText">
              Traditional <br /> House
            </p>
          </div>
          <div
            onClick={ecoFriendlyClick}
            id="ecoFriendly"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/eco.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="ecoText">
              Eco Friendly <br /> House
            </p>
          </div>
          <div
            onClick={vernecularClick}
            id="vernicular"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="vernicularText">
              Vernacular Architecture <br /> House
            </p>
          </div>
        </div>
        <div className={styles.cards__container__designType}>
          <div
            onClick={minimalClick}
            id="minimal"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/contemporary.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="minimalText">
              Minimal Design <br /> House
            </p>
          </div>
          <div
            onClick={openFloorClick}
            id="openFloor"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="openFloorText">
              Open Floor Plan <br /> House
            </p>
          </div>
          <div
            onClick={energyClick}
            id="netZero"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/eco.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="netZeroText">Net zero residence/energy efficient</p>
          </div>
          <div
            onClick={colonialClick}
            id="colonial"
            className={styles.card__designType}
          >
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p id="colonialText">
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
        {/* <Link href="/planyourself" passHref>
          <p className={styles.skipForNow}>Skip for now &gt;&gt;</p>
        </Link> */}
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
