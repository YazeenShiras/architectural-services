import React from "react";
import styles from "../styles/Secondary.module.css";
import Image from "next/image";
import Link from "next/link";

const Secondary = () => {
  return (
    <div className={styles.second}>
      <div className={styles.image__section__container}>
        <div className={styles.image__section}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/main.png"
            alt=""
            width={550}
            height={500}
          ></Image>
          <div className={styles.bubbleFive}>
            <Image
              className={styles.img__top__content__main__left}
              src="/bubble5.png"
              alt=""
              width={40}
              height={60}
            ></Image>
          </div>
        </div>
        <div id="whatWeDo" className={styles.whatWeDo__section}>
          <h3>What We Do</h3>
          <ul>
            <li>Architectural services</li>
            <li>Site plan</li>
            <li>Floor plans</li>
            <li>Elevation</li>
            <li>Interior drawings</li>
            <li>3D views</li>
          </ul>
        </div>
      </div>
      <div id="howItWorks" className={styles.howItWorks__container}>
        <h3>How it works</h3>
        <div className={styles.tophiw__container}>
          <div className={styles.column__tophiw__container}>
            <Image
              className={styles.img__top__content__main__left}
              src="/one.svg"
              alt=""
              width={27}
              height={50}
            ></Image>
            <p className={styles.content__hiw}>
              COLLECTION OF REQUIREMENTS AND INITIAL PAYMENT FROM CLIENT.
            </p>
          </div>
          <div className={styles.column__tophiw__container}>
            <Image
              className={styles.img__top__content__main__left}
              src="/three.svg"
              alt=""
              width={32}
              height={50}
            ></Image>
            <p className={styles.content__hiw}>
              TELEPHONIC DISCUSSION BETWEEN EXPERTS FROM ARCLIF AND CLIENT TO
              COLLECT ADDITIONAL DETAILS (IF REQUIRED).
            </p>
          </div>
        </div>
        <div className={styles.bottomhiw__container}>
          <div className={styles.column__tophiw__container}>
            <Image
              className={styles.img__top__content__main__left}
              src="/two.svg"
              alt=""
              width={31}
              height={50}
            ></Image>
            <p className={styles.bottom__content__hiw}>
              TIMELY SUBMISSION OF DELIVERABLES AS PER SUBSCRIPTION PLANS
              SUBJECT TO REALIZATION OF PAYMENTS.
            </p>
          </div>
          <div className={styles.column__tophiw__container}>
            <Image
              className={styles.img__top__content__main__left}
              src="/four.svg"
              alt=""
              width={34}
              height={50}
            ></Image>
            <p className={styles.bottom__content__hiw}>
              FINAL REVIEW AND DISCUSSION WITH CLIENT FOR ANY CHANGES ON
              EXISTING DELIVERABLES AND ADD ON SERVICES.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondary;
