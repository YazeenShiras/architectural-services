import React from "react";
import styles from "../styles/BodyDesignType.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const BodyDesignType = () => {
  return (
    <div className={styles.bodyDesignType}>
      <Header />
      <div
        className={styles.bodyDesignType__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Type of Design</h3>
        <p>Choose your requirements</p>
        <div className={styles.cards__container__designType}>
          <div className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/contemporary.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Contemporary <br /> House
            </p>
          </div>
          <div className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/traditional.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Traditional <br /> House
            </p>
          </div>
          <div className={styles.card__designType}>
            <div className={styles.imageContainer__card__designType}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/eco.svg"
                alt=""
                width={60}
                height={60}
              ></Image>
            </div>
            <p>
              Eco friendly <br /> House
            </p>
          </div>
        </div>
        <Link href="/planyourself" passHref>
          <div className={styles.next__button}>NEXT</div>
        </Link>
        <Link href="/planyourself" passHref>
          <p className={styles.skipForNow}>Skip for now &gt;&gt;</p>
        </Link>
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

export default BodyDesignType;
