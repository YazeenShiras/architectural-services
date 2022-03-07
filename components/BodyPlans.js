import React from "react";
import styles from "../styles/BodyPlans.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const BodyPlans = () => {
  return (
    <div className={styles.bodyPlans}>
      <Header />
      <div
        className={styles.bodyPlans__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Choose best plans</h3>
        <p>Lorem ipsum dolor</p>
        <div className={styles.cardsContainer__plans}>
          <div className={styles.card__plans}>
            <h5>Plan Name</h5>
            <h4>₹5 Lakh</h4>
            <p>
              Lorem Ipsum is simply dummy text of <br /> the printing
            </p>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.button__container__plans}>
              <Link href="/confirmplan" passHref>
                <div className={styles.choosePlan__button}>CHOOSE PLAN</div>
              </Link>
            </div>
          </div>

          <div className={styles.card__plans__middle}>
            <h5>Plan Name</h5>
            <h4>₹10 Lakh</h4>
            <p>
              Lorem Ipsum is simply dummy text of <br /> the printing
            </p>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.button__container__plans}>
              <Link href="/confirmplan" passHref>
                <div className={styles.choosePlan__button__middle}>
                  CHOOSE PLAN
                </div>
              </Link>
            </div>
          </div>

          <div className={styles.card__plans}>
            <h5>Plan Name</h5>
            <h4>₹15 Lakh</h4>
            <p>
              Lorem Ipsum is simply dummy text of <br /> the printing
            </p>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.button__container__plans}>
              <Link href="/confirmplan" passHref>
                <div className={styles.choosePlan__button}>CHOOSE PLAN</div>
              </Link>
            </div>
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

export default BodyPlans;
