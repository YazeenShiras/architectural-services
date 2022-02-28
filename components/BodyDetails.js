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
      <div className={styles.bodyDetails__container}>
        <div
          className={styles.bodyDetails__image}
          style={{
            backgroundImage: `url('/formPage.png')`,
          }}
        ></div>
        <div className={styles.bodyDetails__content}>
          <div className={styles.form__container}>
            <h3>
              Please Complete your details <br /> to get a proper assistance!
            </h3>
            <form className={styles.form} action="">
              <fieldset className={styles.input__container}>
                <legend>Name</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Mobile Number</legend>
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
                <legend>Location</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Profession</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>No.of Family Members</legend>
                <div className={styles.input__box}>
                  <input type="text" />
                </div>
              </fieldset>
              <div className={styles.citizenType__container}>
                <p>Senior Citizen?</p>
                <input
                  className={styles.regular__checkbox}
                  type="checkbox"
                  name="yes"
                  id=""
                />
                <label htmlFor="yes">Yes</label>
                <input
                  className={styles.regular__checkbox}
                  type="checkbox"
                  name="no"
                  id=""
                />
                <label htmlFor="no">No</label>
              </div>
              <Link href="/budget" passHref>
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
