import React from "react";
import styles from "../styles/PricingPlan.module.css";

const PricingPlan = () => {
  return (
    <div
      style={{ backgroundImage: `url("/planPricing_bg.png")` }}
      className={styles.pricingPlan}
      id="pricingPlan"
    >
      <div className={styles.title__pricingPlan}>
        <h2>Pricing Plan</h2>
        <p>
          Easly your Estimate Price your Home Design. Please fill your correct
          data on below
        </p>
      </div>
      <div className={styles.pricing__card__container}>
        <div className={styles.pricing__card}>
          <h1>Basic Plan</h1>
          <h2>₹25</h2>
          <h5>Per Sq.ft</h5>
          <p>Easly your Estimate Price</p>
          <a href="login" className={styles.buyNow__button}>
            Try now
          </a>
        </div>
        <div className={styles.pricing__card}>
          <h1>Plus Plan</h1>
          <h2>₹50</h2>
          <h5>Per Sq.ft</h5>
          <p>Easly your Estimate Price</p>
          <a href="login" className={styles.buyNow__button}>
            Try now
          </a>
        </div>
        <div className={styles.pricing__card}>
          <h1>Elite Plan</h1>
          <h2>₹120</h2>
          <h5>Per Sq.ft</h5>
          <p>Easly your Estimate Price</p>
          <a href="login" className={styles.buyNow__button}>
            Try now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
