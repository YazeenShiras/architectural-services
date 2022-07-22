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
          Arclif have already delivered numerous projects all over India.
          Quality and timely delivery of projects are our key strength...
        </p>
      </div>
      <div className={styles.ourRecentworks_Main}>
        <Carousel animation="slide" duration="500" swipe="true" interval="2000">
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent1.jpg" alt="" width={550} height={300}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent2.jpg" alt="" width={550} height={300}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent3.jpg" alt="" width={550} height={300}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent4.jpg" alt="" width={550} height={300}></Image>
            </div>
          </div>

          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent5.jpg" alt="" width={550} height={300}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent6.jpg" alt="" width={550} height={300}></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent7.jpg" alt="" width={550} height={300}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent8.jpg" alt="" width={550} height={300}></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image src="/recent9.jpg" alt="" width={550} height={300}></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent10.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent11.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent12.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent13.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent14.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent15.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent16.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent17.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent18.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent19.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent20.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
          <div className={styles.cardContainer__ourRecentworks}>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent21.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
            <div className={styles.card__ourRecentworks}>
              <Image
                src="/recent22.jpg"
                alt=""
                width={550}
                height={300}
              ></Image>
            </div>
          </div>
        </Carousel>
      </div>

      <div className={styles.ourRecentworks_mobile}>
        <Carousel animation="slide" duration="500" swipe="true" interval="2000">
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent1.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent2.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent3.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent4.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent5.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent6.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent7.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent8.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent9.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent10.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent11.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent12.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent13.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent14.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent15.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent16.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent18.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent19.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent20.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent21.jpg" alt="" width={550} height={350}></Image>
          </div>
          <div className={styles.card__ourRecentworks}>
            <Image src="/recent22.jpg" alt="" width={550} height={350}></Image>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OurRecentWorks;
