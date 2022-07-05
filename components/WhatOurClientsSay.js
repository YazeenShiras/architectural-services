import React from "react";
import styles from "../styles/WhatOurClientsSay.module.css";
import Image from "next/image";

const WhatOurClientsSay = () => {
  return (
    <div className={styles.whatOurClientsSay}>
      <div className={styles.title__whatOurClientsSay}>
        <h2>What our clients says</h2>
        <p>
          Our clinets send us bunch of Smiles with our Services and we <br />{" "}
          love them
        </p>
      </div>
      <div className={styles.cardContainer__whatOurClientsSay}>
        <div className={styles.card__whatOurClientsSay}>
          <div className={styles.title__card__whatOurClientsSay}>
            <div className={styles.image__title__card__whatOurClientsSay}>
              <Image src="/demoUser.png" alt="" width={70} height={70}></Image>
            </div>
            <div className={styles.text__title__card__whatOurClientsSay}>
              <h5>Mohammed Sadhik</h5>
              <p>CEO, Brand Name</p>
            </div>
          </div>
          <p>
            Our clinets send us bunch of Smiles with our Services and we love
            them Our clinets send us bunch of Smiles with our Services and we
            love them
          </p>
        </div>
        <div className={styles.card__whatOurClientsSayActive}>
          <div className={styles.title__card__whatOurClientsSay}>
            <div className={styles.image__title__card__whatOurClientsSay}>
              <Image src="/demoUser.png" alt="" width={70} height={70}></Image>
            </div>
            <div className={styles.text__title__card__whatOurClientsSay}>
              <h5>Mohammed Sadhik</h5>
              <p>CEO, Brand Name</p>
            </div>
          </div>
          <p>
            Our clinets send us bunch of Smiles with our Services and we love
            them Our clinets send us bunch of Smiles with our Services and we
            love them
          </p>
        </div>
        <div className={styles.card__whatOurClientsSay}>
          <div className={styles.title__card__whatOurClientsSay}>
            <div className={styles.image__title__card__whatOurClientsSay}>
              <Image src="/demoUser.png" alt="" width={70} height={70}></Image>
            </div>
            <div className={styles.text__title__card__whatOurClientsSay}>
              <h5>Mohammed Sadhik</h5>
              <p>CEO, Brand Name</p>
            </div>
          </div>
          <p>
            Our clinets send us bunch of Smiles with our Services and we love
            them Our clinets send us bunch of Smiles with our Services and we
            love them
          </p>
        </div>
      </div>
      {/* <div className={styles.carosel__whatOurClientsSay}>
        <span></span>
        <span className={styles.caroselActive__whatOurClientsSay}></span>
        <span></span>
      </div> */}
    </div>
  );
};

export default WhatOurClientsSay;
