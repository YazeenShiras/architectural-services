import React from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import Link from "next/link";
import FooterMobile from "./FooterMobile";

const MainMobile = () => {
  return (
    <div className={styles.mainMobile}>
      <section className={styles.main__section__mobile}>
        <div className={styles.title__mobile}>
          <div className={styles.text__title__mobile}>
            <h1>
              Build your dream <br /> home with a few <br /> clicks !
            </h1>
            <p>
              get your home design in <br /> just 7 days.
            </p>
          </div>
          <div className={styles.image__title__mobile}>
            <div className={styles.bubble__title__mobile}>
              <Image
                src="/bubbleMobile1.png"
                alt=""
                width={65}
                height={80}
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.greenBg}>
          <div className={styles.imageContainer__mobile}>
            <div className={styles.imgMain}>
              <Image src="/main2.png" alt="" width={550} height={380}></Image>
            </div>
            <div className={styles.bubbleMobileTwo}>
              <Image
                src="/bubbleMobile2.png"
                alt=""
                width={50}
                height={60}
              ></Image>
            </div>
          </div>
          <div className={styles.tryItNow__button__container__mobile}>
            <Link href="/detailsform" passHref>
              <div className={styles.tryITNow__button__mobile}>
                DESIGN MY HOME
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.about__container__mobile}>
          <div>
            <Image
              className={styles.imgHero}
              src="/main.png"
              alt=""
              width={550}
              height={600}
            ></Image>
          </div>
          <div className={styles.aboutText}>
            <h3>About Us</h3>
            <p>
              We design your dream through inspiring and sustainable spaces
              adding beauty to it with best possible decisions by our team of
              specialised architects. We strive to understand the needs of
              society and contribute our experience values to what we observe
              through our integrative approach.
            </p>
          </div>
          <div className={styles.WhatWeDo__mobile}>
            <h3>What We Do</h3>
            <p>Architectural services</p>
            <p>Site plan</p>
            <p>Floor plans</p>
            <p>Elevation</p>
            <p>Interior drawings</p>
            <p>3D views</p>
          </div>

          <div className={styles.howItWorks__mobile}>
            <h3>How it works</h3>
            <div className={styles.hiw__content__mobile}>
              <div className={styles.image__hiwContent__mobile}>
                <Image src="/one.svg" alt="" width={30} height={60}></Image>
              </div>
              <p>
                Find a best home plan by posting your requirementsFind a best
                home plan by posting your requirements
              </p>
            </div>
            <div className={styles.hiw__content__mobile}>
              <div className={styles.image__hiwContent__mobile}>
                <Image src="/two.svg" alt="" width={40} height={70}></Image>
              </div>
              <p>
                Find a best home plan by posting your requirementsFind a best
                home plan by posting your requirements
              </p>
            </div>
            <div className={styles.hiw__content__mobile}>
              <div className={styles.image__hiwContent__mobile}>
                <Image src="/three.svg" alt="" width={40} height={60}></Image>
              </div>
              <p>
                Find a best home plan by posting your requirementsFind a best
                home plan by posting your requirements
              </p>
            </div>
            <div className={styles.hiw__content__mobile__last}>
              <div className={styles.image__hiwContent__mobile}>
                <Image src="/four.svg" alt="" width={40} height={70}></Image>
              </div>
              <p>
                Find a best home plan by posting your requirementsFind a best
                home plan by posting your requirements
              </p>
            </div>
          </div>

          <div className={styles.quoteContainer__mobile}>
            <div className={styles.buttonContainer__mobile}>
              <div
                id="leftButtonScroll"
                className={styles.left__arrowContainer__mobile}
              >
                <Image
                  className={styles.arrowLeft}
                  src="/leftArrow.svg"
                  alt=""
                  width={13}
                  height={13}
                ></Image>
              </div>
            </div>

            <div className={styles.cards__container__mobile}>
              <div className={styles.card__quote__container__mobile}>
                <Image
                  className={styles.quoteStart}
                  src="/quoteStart.svg"
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s
                </p>
                <div className={styles.quoteEnd__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/quoteEnd.svg"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className={styles.userProfile__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/demoUser.png"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                  <div className={styles.userInfo__container__mobile}>
                    <h5>John Doe</h5>
                    <p>CEO, Brand Name</p>
                  </div>
                </div>
              </div>

              <div className={styles.card__quote__container__mobile}>
                <Image
                  className={styles.quoteStart}
                  src="/quoteStart.svg"
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s
                </p>
                <div className={styles.quoteEnd__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/quoteEnd.svg"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className={styles.userProfile__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/demoUser.png"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                  <div className={styles.userInfo__container__mobile}>
                    <h5>John Doe</h5>
                    <p>CEO, Brand Name</p>
                  </div>
                </div>
              </div>

              <div className={styles.card__quote__container__mobile}>
                <Image
                  className={styles.quoteStart}
                  src="/quoteStart.svg"
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s
                </p>
                <div className={styles.quoteEnd__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/quoteEnd.svg"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className={styles.userProfile__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/demoUser.png"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                  <div className={styles.userInfo__container__mobile}>
                    <h5>John Doe</h5>
                    <p>CEO, Brand Name</p>
                  </div>
                </div>
              </div>

              <div className={styles.card__quote__container__mobile}>
                <Image
                  className={styles.quoteStart}
                  src="/quoteStart.svg"
                  alt=""
                  width={30}
                  height={30}
                ></Image>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s
                </p>
                <div className={styles.quoteEnd__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/quoteEnd.svg"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                </div>
                <div className={styles.userProfile__container__mobile}>
                  <Image
                    className={styles.quoteStart}
                    src="/demoUser.png"
                    alt=""
                    width={30}
                    height={30}
                  ></Image>
                  <div className={styles.userInfo__container__mobile}>
                    <h5>John Doe</h5>
                    <p>CEO, Brand Name</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.buttonContainer__mobile}>
              <div
                id="rightButtonScroll"
                className={styles.right__arrowContainer__mobile}
              >
                <Image
                  className={styles.arrowRight}
                  src="/rightArrow.svg"
                  alt=""
                  width={13}
                  height={13}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <FooterMobile />
      </section>
    </div>
  );
};

export default MainMobile;
