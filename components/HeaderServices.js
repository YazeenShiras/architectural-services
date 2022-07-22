import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const HeaderServices = () => {
  return (
    <div>
      <div className={styles.headerMain}>
        <div className={styles.header__left}>
          <Link href="/" passHref>
            <Image
              className={styles.header__logo}
              src="/agrihaLogo.svg"
              alt="agriha Logo"
              width={120}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.header__right__main}>
          <nav className={styles.nav__header__main}>
            <ul>
              <li>
                <Link href="/" passHref>
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/view-services" passHref>
                  <p className={styles.home__nav__header__main}>Our Services</p>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link passHref href="/">
                  <p>How It Works</p>
                </Link>
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
                height={40}
              />
            </Link>
          </div>
          <div className={styles.header__right}>
            <a href="tel:9995111325" className={styles.callButton__header}>
              <Image
                className={styles.header__menu}
                src="/callIcon.svg"
                alt=""
                width={30}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderServices;
