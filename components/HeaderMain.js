import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const HeaderMain = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header__left}>
          <Link href="/" passHref>
            <Image
              className={styles.header__logo}
              src="/arclifLogo.png"
              alt="Arclif Logo"
              width={120}
              height={40}
            />
          </Link>{" "}
          <div className={styles.header__logo_one}>
            <Image src="/one.png" alt="" width={2} height={25} />
          </div>
          <Image
            className={styles.header__logo}
            src="/agrihaLogo.png"
            alt="agriha Logo"
            width={110}
            height={90}
          />
        </div>
        <div className={styles.header__right}>
          <nav className={styles.header__nav}>
            <ul>
              <li>
                <a href="#aboutUs">About Us</a>
              </li>
              <li>
                <a href="#whatWeDo">Services</a>
              </li>
              <li>
                <a href="#marketplace">Marketplace</a>
              </li>
            </ul>
          </nav>
          <Link href="/sendotp" passHref>
            <p className={styles.loginButton__header}>GET START</p>
          </Link>
          {/* <div className={styles.header__menu__container}>
            <Image
              className={styles.header__menu}
              src="/menuIcon.svg"
              alt=""
              width={30}
              height={20}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;