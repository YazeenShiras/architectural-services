import Link from "next/link";
import React from "react";
import styles from "../styles/BodyDetails.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";

const BodyDetails = () => {
  return (
    <div className={styles.bodyDetails}>
      <Header />
      <div
        className={styles.bodyDetails__container}
        style={{
          backgroundImage: `url('/hero3.png')`,
        }}
      >
        <div className={styles.bodyDetails__content}>
          <div className={styles.form__container}>
            <h3>Here we go!</h3>
            <form className={styles.form} action="">
              <fieldset className={styles.input__container}>
                <legend>Name</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Email</legend>
                <div className={styles.input__box}>
                  <input type="email" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Mobile Number</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Location</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <Link href="/success" passHref>
                <div className={styles.submit__button__form}>SUBMIT</div>
              </Link>
            </form>
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

export default BodyDetails;
