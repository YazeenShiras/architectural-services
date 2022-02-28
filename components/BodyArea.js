import React from "react";
import styles from "../styles/BodyArea.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const BodyArea = () => {
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
              <p>Total Area</p>
              <ProgressBar />
            </div>
            <div className={styles.scroller__contanier}>
              <p>No.of Floors</p>
              <ProgressBar />
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
