import Link from "next/link";
import React from "react";
import styles from "../styles/BodySuccess.module.css";
import Footer from "./Footer";
import Header from "./Header";

const BodySuccess = () => {
  return (
    <div className={styles.bodySuccess}>
      <Header />
      <div
        className={styles.bodyDetails__container}
        style={{
          backgroundImage: `url('/hero3.png')`,
        }}
      >
        <div className={styles.bodyDetails__content}>
          <div className={styles.success__container}>
            <p>
              Succefully submitttted your <br /> data, our executives will reach{" "}
              <br />
              you shortly
            </p>
            <div className={styles.animation__container}></div>
            <Link href="/" passHref>
              <div className={styles.continue__button__success}>CONTINUE</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BodySuccess;
