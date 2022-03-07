import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "../styles/BodySuccess.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";

const BodySuccess = () => {
  return (
    <div className={styles.bodySuccess}>
      <Header />
      <div
        className={styles.bodySuccess__container}
        style={{
          backgroundImage: `url('/hero3.png')`,
        }}
      >
        <div className={styles.bodyDetails__content}>
          <div className={styles.success__container}>
            <p>
              your payment was successful <br />
              Check your mail for <br /> confirmation
            </p>
            <div className={styles.animation__container}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/sucess.svg"
                alt=""
                width={300}
                height={350}
              ></Image>
            </div>
            <Link href="/" passHref>
              <div className={styles.continue__button__success}>CONTINUE</div>
            </Link>
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

export default BodySuccess;
