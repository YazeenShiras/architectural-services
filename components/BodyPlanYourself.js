import React from "react";
import styles from "../styles/BodyPlanYouself.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const BodyPlanYourself = () => {
  return (
    <div className={styles.bodyPlanYourself}>
      <Header />
      <div className={styles.bodyPlanYourself__container}>
        <div className={styles.image__container__area}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/planyourself.png"
            alt=""
            width={500}
            height={400}
          ></Image>
        </div>
        <div className={styles.content__contanier__area}>
          <h3>
            Plan your dream house <br /> yoursrelf
          </h3>
          <div className={styles.progressBar__container__area}>
            <div className={styles.scroller__contanier}>
              <p>No.of Bedrooms</p>
              <ProgressBar />
            </div>
            <div className={styles.scroller__contanier}>
              <p>No.of attached Bedrooms</p>
              <ProgressBar />
            </div>
          </div>
          <Link href="/planyourselftwo" passHref>
            <div className={styles.next__button}>NEXT</div>
          </Link>
          <Link href="/planyourselftwo" passHref>
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

export default BodyPlanYourself;
