import React from "react";
import HeaderLogin from "./HeaderLogin";
import styles from "../styles/StagePayment.module.css";

const StagePayments = () => {
  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <h3>Stage Payments</h3>
        <div className={styles.containers__stagePayments}>
          <div className={styles.stagePaymentsContainer}>
            <div className={styles.stagePayment}>
              <h4>Stage 1</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>10000.00</h5>
                <div className={styles.completed__button}>Completed</div>
              </div>
            </div>
            <div className={styles.stagePayment}>
              <h4>Stage 2</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>10000.00</h5>
                <div className={styles.completed__button}>Completed</div>
              </div>
            </div>
            <div className={styles.stagePayment}>
              <h4>Stage 3</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>10000.00</h5>
                <div className={styles.completed__button}>Completed</div>
              </div>
            </div>
            <div className={styles.stagePayment}>
              <h4>Stage 4</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>10000.00</h5>
                <div className={styles.completed__button}>Completed</div>
              </div>
            </div>
          </div>
          <div className={styles.payAtOneTimeContainer}>
            <h4>Pay Complete Amount</h4>
            <div className={styles.payAtOneTime}>
              <p>Stage 1</p>
              <p>100000</p>
            </div>
            <div className={styles.payAtOneTime}>
              <p>Stage 2</p>
              <p>100000</p>
            </div>
            <div className={styles.payAtOneTime}>
              <p>Stage 3</p>
              <p>100000</p>
            </div>
            <div className={styles.payAtOneTime}>
              <p>Stage 4</p>
              <p>100000</p>
            </div>
            <div className={styles.payAtOneTime__bottom}>
              <div className={styles.payAtOneTime}>
                <h5>Total Amount</h5>
                <h3>100000</h3>
              </div>
            </div>
            <div className={styles.payAllButton}>MAKE PAYMENT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagePayments;
