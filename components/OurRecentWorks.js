import React from "react";
import styles from "../styles/OurRecentWorks.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const OurRecentWorks = () => {
  return (
    <div className={styles.ourRecentworks}>
      <div className={styles.title__ourRecentworks}>
        <h2>Our Recent Works</h2>
        <p>
          Arclif have already delivered numerous projects all over India. <br />
          Quality and timely delivery of projects are our key strength...
        </p>
      </div>
      <div className={styles.ourRecentworks_Main}>
        <Carousel animation="slide" duration="500" swipe="true" interval="2000">
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image1.jpg" alt="" width={350} height={250}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image2.jpg" alt="" width={350} height={250}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image3.jpg" alt="" width={350} height={250}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/Image4.jpg" alt="" width={350} height={250}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image5.jpg" alt="" width={350} height={250}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image6.jpg" alt="" width={350} height={250}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image7.jpg" alt="" width={350} height={250}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image9.jpg" alt="" width={350} height={250}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image10.jpg" alt="" width={350} height={250}></Image>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles.ourRecentworks_mobile}>
        <Carousel animation="slide" duration="500" swipe="true" interval="2000">
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image2.jpg" alt="" width={550} height={350}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image3.jpg" alt="" width={550} height={350}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/Image4.jpg" alt="" width={550} height={350}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image5.jpg" alt="" width={550} height={350}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image6.jpg" alt="" width={550} height={350}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image7.jpg" alt="" width={550} height={350}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image9.jpg" alt="" width={550} height={350}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/image10.jpg" alt="" width={550} height={350}></Image>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles.scrollIndicator__ourRecentworks}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className={styles.active__scrollIndicator__ourRecentworks}></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default OurRecentWorks;
