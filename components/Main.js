import React from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__left}>
        <div className={styles.header__main__left}>
          <div className={styles.header__logo}>
            <Image
              className={styles.header__logo__img}
              src="/arclifLogo.svg"
              alt="Arclif Logo"
              width={100}
              height={40}
            ></Image>
          </div>
          <h5>Home</h5>
        </div>
        <div className={styles.content__main__left}>
          <div className={styles.top__content__main__left}>
            <Image
              className={styles.img__top__content__main__left}
              src="/bubble1.png"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div>
          <h1>
            Build your dream <br /> home with a few <br /> clicks !
          </h1>
          <p>
            We offer innovative design consultancy and architectural services
            including urban strategies to our clients in order to experience
            most compelling designs possible.
          </p>
          <div className={styles.bottom__content__main__left}>
            <Image
              className={styles.img__bottom__content__main__left}
              src="/bubble2.png"
              alt=""
              width={40}
              height={50}
            ></Image>
            <Image
              className={styles.imgTwo__bottom__content__main__left}
              src="/bubble3.png"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div>
          <div className={styles.about__section__main__left}>
            <h3>About Us</h3>
            <p>
              We design your dream through inspiring and sustainable spaces
              adding beauty to it with best possible decisions by our team of
              specialised architects. We strive to understand the needs of
              society and contribute our experience values to what we observe
              through our integrative approach.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.main__right}>
        <div className={styles.header__main__right}>
          <div className={styles.header__nav}>
            <ul>
              <li className={styles.homeSeeker}>Home Seeker</li>
              <li>Architect</li>
              <li>Marketplace</li>
            </ul>
          </div>
          <div className={styles.login__button__header}>Login</div>
        </div>
        <div className={styles.content__main__right}>
          <div className={styles.top__content__main__right}>
            <Image
              className={styles.img__top__content__main__left}
              src="/img1.png"
              alt=""
              width={550}
              height={380}
            ></Image>
            <div className={styles.bubble__content__main__right}>
              <Image
                className={styles.bubble__top__content__main__right}
                src="/bubble4.png"
                alt=""
                width={45}
                height={60}
              ></Image>
            </div>
          </div>
          <div className={styles.actionContainer__main__right}>
            <div className={styles.subHeading__main__right}>
              <h3>
                Find a best home plan by <br /> posting your requirements
              </h3>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/bubble2.png"
                alt=""
                width={40}
                height={50}
              ></Image>
            </div>
            <Link href="/detailsform" passHref>
              <div className={styles.tryNow__button__main__right}>
                TRY IT NOW
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
