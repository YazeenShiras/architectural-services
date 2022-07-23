import React from "react";
import styles from "../styles/ValuesContainer.module.css";
import Image from "next/image";

const ValuesContainer = () => {
  return (
    <div className={styles.valuesConatiner}>
      <div className={styles.valuesConatiner_main}>
        <div className={styles.top__valuesConatiner}>
          <h5>
            The values that hold us true <br /> and to account
          </h5>
          <div className={styles.right__top__valuesConatiner}>
            <div className={styles.bgRadient__right__top__valuesConatiner}>
              <div className={styles.text__right__top__valuesConatiner}>
                <h4>Get in touch</h4>
                <p>We&#39;d love to hear from you.</p>
              </div>
              <a href="#contact" className={styles.getStart__button}>
                Get Start
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom__valuesConatiner}>
          <div className={styles.card__bottom__valuesConatiner}>
            <div className={styles.title__card__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/refund.svg" alt="" width={50} height={50} />
              </div>
              <h2>Razorpay</h2>
            </div>
            <p>Trusted partner for online payments</p>
          </div>
          <div className={styles.card__bottom__valuesConatiner}>
            <div className={styles.title__card__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/trust.svg" alt="" width={50} height={50} />
              </div>
              <h2>Safe and Secure</h2>
            </div>
            <p>We truly securing your sensitive data</p>
          </div>
          <div className={styles.card__bottom__valuesConatiner}>
            <div className={styles.title__card__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/socialGood.svg" alt="" width={50} height={50} />
              </div>
              <h2>Collaboration</h2>
            </div>
            <p>Collaborate with architects all around India</p>
          </div>
        </div>
      </div>

      <div className={styles.valuesConatiner_mobile}>
        <div className={styles.top__valuesConatiner}>
          <h5>The values that hold us true and to account</h5>
        </div>
        <div className={styles.bottom__valuesConatiner}>
          <div className={styles.bottom__left__valuesConatiner}>
            <div className={styles.card__bottom__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/refund.svg" alt="" width={70} height={70} />
              </div>
              <div className={styles.title__card__valuesConatiner}>
                <h2>Razorpay</h2>
                <p>Trusted partner for online payments</p>
              </div>
            </div>
            <div className={styles.card__bottom__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/trust.svg" alt="" width={70} height={70} />
              </div>
              <div className={styles.title__card__valuesConatiner}>
                <h2>Safe and Secure</h2>
                <p>We truly securing your sensitive data</p>
              </div>
            </div>
            <div className={styles.card__bottom__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/socialGood.svg" alt="" width={70} height={70} />
              </div>
              <div className={styles.title__card__valuesConatiner}>
                <h2>Collaboration</h2>
                <p>Collaborate with architects all around India</p>
              </div>
            </div>
          </div>
          <div className={styles.right__top__valuesConatiner}>
            <div className={styles.bgRadient__right__top__valuesConatiner}>
              <div className={styles.text__right__top__valuesConatiner}>
                <h4>Get in touch</h4>
                <p>We&#39;d love to hear from you.</p>
              </div>
              <a href="#contact" className={styles.getStart__button}>
                Get Start
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesContainer;
