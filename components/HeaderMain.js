import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const HeaderMain = () => {
  const menuClick = () => {
    document.getElementById("header__mobile_container").style.height = "250px";
    document.getElementById("header__nav_mobile").style.display = "flex";
    document.getElementById("menuIcon").style.display = "none";
    document.getElementById("closeIcon").style.display = "block";
  };
  const closeClick = () => {
    document.getElementById("header__mobile_container").style.height = "70px";
    document.getElementById("header__nav_mobile").style.display = "none";
    document.getElementById("menuIcon").style.display = "block";
    document.getElementById("closeIcon").style.display = "none";
  };
  return (
    <div>
      <div className={styles.headerMain}>
        <div className={styles.header__left}>
          <Image
            className={styles.header__logo}
            src="/agrihaLogo.svg"
            alt="agriha Logo"
            width={120}
            height={100}
          />
        </div>
        <div className={styles.header__right__main}>
          <nav className={styles.nav__header__main}>
            <ul>
              <li className={styles.home__nav__header__main}>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#ourServices">Our Services</a>
              </li>
              <li>
                <a href="#pricingPlan">Plans</a>
              </li>
              <li>
                <a href="#aboutUs">About Us</a>
              </li>
              <li>
                <a href="#howItWorks">How It Works</a>
              </li>
            </ul>
          </nav>
          <a href="#contact" className={styles.contactButton__header}>
            Contact Us
          </a>
        </div>
        <div className={styles.header__right__main__mobile}>
          <div className={styles.menuIcon}>
            <Image src="/menuIcon2.svg" alt="" width={25} height={25} />
          </div>
        </div>
      </div>

      <div
        id="header__mobile_container"
        className={styles.header__mobile_container__main}
      >
        <div className={styles.header__mobile}>
          <div className={styles.header__left}>
            <Link href="/" passHref>
              <Image
                className={styles.header__logo}
                src="/AgrihaLogo3.svg"
                alt="agriha Logo"
                width={120}
                height={100}
              />
            </Link>{" "}
          </div>
          <div className={styles.header__right}>
            <a href="tel:9995111325" className={styles.contactButton__header}>
              <Image
                className={styles.header__menu}
                src="/callIcon.svg"
                alt=""
                width={30}
                height={20}
              />
            </a>
            <div
              id="menuIcon"
              onClick={menuClick}
              className={styles.header__menu__container}
            >
              <Image
                className={styles.header__menu}
                src="/menuIcon.svg"
                alt=""
                width={30}
                height={20}
              />
            </div>
            <div
              id="closeIcon"
              onClick={closeClick}
              className={styles.header__menu__container__close}
            >
              <Image
                className={styles.header__menu}
                src="/closeIcon.svg"
                alt=""
                width={40}
                height={20}
              />
            </div>
          </div>
        </div>
        <div
          id="header__nav_mobile"
          className={styles.header__nav_mobile__main}
        >
          <div className={styles.header__nav_link__main}>
            <a href="#home">Home</a>
          </div>
          <div className={styles.header__nav_link__main}>
            <a href="#ourServices">Our Services</a>
          </div>
          <div className={styles.header__nav_link__main}>
            <a href="#plans">Plans</a>
          </div>
          <div className={styles.header__nav_link__main}>
            <a href="#howItWorks">How It Works</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
