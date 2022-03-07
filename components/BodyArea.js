import React, { useState } from "react";
import styles from "../styles/BodyArea.module.css";
import scrollbarStyles from "../styles/BodyBudget.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const BodyArea = (props) => {
  const [area, setArea] = useState(5);
  const [floor, setFloor] = useState(5);

  return (
    <div className={styles.bodyArea}>
      <Header />
      <div className={styles.bodyArea__container}>
        <div className={styles.image__container__area}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/area.png"
            alt=""
            width={550}
            height={400}
          ></Image>
        </div>
        <div className={styles.content__contanier__area}>
          <h3>Total area for house</h3>
          <div className={styles.progressBar__container__area}>
            <div className={styles.scroller__contanier}>
              <p>Total Area (Sq.ft)</p>
              <div className={scrollbarStyles.scroller__range__container}>
                <p>300</p>
                <p>5000</p>
              </div>
              <ProgressBar percentage={area} />
              <div className={scrollbarStyles.scroller__limits__container}>
                <p onClick={() => setArea(5)}>300</p>
                <p onClick={() => setArea(25)}>1000</p>
                <p onClick={() => setArea(50)}>2000</p>
                <p onClick={() => setArea(75)}>4000</p>
                <p onClick={() => setArea(100)}>5000</p>
              </div>
            </div>
            <div className={scrollbarStyles.scroller__contanier}>
              <p>No.of Floors</p>
              <div className={scrollbarStyles.scroller__range__container}>
                <p>1</p>
                <p>2</p>
              </div>
              <ProgressBar percentage={floor} />
              <div className={scrollbarStyles.scroller__limits__container}>
                <p onClick={() => setFloor(5)}>01</p>
                <p onClick={() => setFloor(35)}>02</p>
                <p onClick={() => setFloor(65)}>03</p>
                <p onClick={() => setFloor(100)}>04</p>
              </div>
            </div>
          </div>
          <Link href="/designtype" passHref>
            <div className={styles.next__button}>NEXT</div>
          </Link>
          <Link href="/designtype" passHref>
            <p className={styles.skipForNow}>Skip for now &gt;&gt;</p>
          </Link>
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

export default BodyArea;
