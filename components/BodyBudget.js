import React from "react";
import styles from "../styles/BodyBudget.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const BodyBudget = () => {
  return (
    <div className={styles.bodyBudget}>
      <Header />
      <div className={styles.bodyBudget__container}>
        <div className={styles.image__container__budget}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/budget.svg"
            alt=""
            width={400}
            height={350}
          ></Image>
        </div>
        <div className={styles.content__container__budget}>
          <h3>
            Total budget for my <br /> dream home
          </h3>
          <div className={styles.scroller__contanier}>
            <p>Total budget for home</p>
            <ProgressBar />
          </div>
          <Link href="/area" passHref>
            <div className={styles.next__button}>NEXT</div>
          </Link>
          <Link href="/area" passHref>
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

export default BodyBudget;
