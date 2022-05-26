import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const HeaderMain = () => {
  return (
    <div>
      <div className={styles.headerMain}>
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
          <nav className={styles.header__nav_login}>
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
            <p className={styles.loginButton__header}>GET STARTED</p>
          </Link>
          <a
            className={styles.contactButton__header}
            href="https://api.whatsapp.com/send?phone=919995111325&text=Hey%20AGRIHA%2C%20can%20you%20help%20me%3F"
          >
            CHAT NOW
          </a>
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
