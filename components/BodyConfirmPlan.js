import React from "react";
import styles from "../styles/BodyPlans.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const BodyConfirmPlan = () => {
  return (
    <div className={styles.bodyPlans}>
      <Header />
      <div
        className={styles.bodyPlans__container__confirm}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Confirm your Plan</h3>
        <p>Lorem ipsum dolor</p>
        <div className={styles.cardsContainer__plans__confirm}>
          <div className={styles.card__plans__left__confirm}>
            <p className={styles.name__card__plans__left__confirm}>
              Hi, John Doe
            </p>
            <p className={styles.message__card__plans__left__confirm}>
              You have choosen basic plan for your home construction, your plan
              includes below features and the rate you have to pay.
            </p>
            <h5>Plan Features</h5>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum</p>
            </div>
            <div className={styles.feature__container__plans}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/check.svg"
                alt=""
                width={12}
                height={12}
              ></Image>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className={styles.container__planDetails}>
              <div className={styles.left__planDetails__bottom}>
                <h5>
                  Plan Name <span>X</span> 1200 Sq.ft
                </h5>
              </div>
              <div className={styles.right__planDetails__bottom}>
                <h5>₹75,000</h5>
              </div>
            </div>
          </div>

          <div className={styles.card__plans__right__confirm}>
            <p>Total Amount</p>
            <h4>Plan Name</h4>
            <div className={styles.card__plans__right__confirm__top}>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <p>Total Area</p>
                <p>1000 Sq.ft</p>
              </div>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <p>Amount Per sq.ft</p>
                <p>₹75</p>
              </div>
            </div>
            <div className={styles.card__plans__right__confirm__middle}>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <p>Total Payable</p>
                <p>₹75,000</p>
              </div>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <div
                  className={
                    styles.card__plans__right__confirm__top__subContainer
                  }
                >
                  <input type="radio" id="radio" />{" "}
                  <p>
                    Total <br /> Amount
                  </p>
                </div>
                <p>₹75,000</p>
              </div>
            </div>
            <div className={styles.card__plans__right__confirm__bottom}>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <div
                  className={
                    styles.card__plans__right__confirm__top__subContainer
                  }
                >
                  <input type="radio" id="radio" />{" "}
                  <p>
                    10% of total amount <br /> as Down Payment
                  </p>
                </div>
                <p>₹7,500</p>
              </div>
            </div>
            <Link href="/success" passHref>
              <div className={styles.paymnet__button}>MAKE PAYMENT</div>
            </Link>
            <div className={styles.info__container__confirm}>
              <Image src="/info.svg" alt="" width={25} height={25}></Image>
              <p>
                You can choose either payment methodes, pay in full or part pay
                as down payment
              </p>
            </div>
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

export default BodyConfirmPlan;
