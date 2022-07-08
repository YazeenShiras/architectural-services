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
                <p>
                  Our clinets send us bunch of Smiles with <br /> our Services
                  and we love them
                </p>
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
                <Image src="/trust.svg" alt="" width={50} height={50} />
              </div>
              <h2>Trust</h2>
            </div>
            <p>
              Our clinets send us bunch of Smiles with our <br /> Services and
              we love them
            </p>
          </div>
          <div className={styles.card__bottom__valuesConatiner}>
            <div className={styles.title__card__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/socialGood.svg" alt="" width={50} height={50} />
              </div>
              <h2>Social Good</h2>
            </div>
            <p>
              Our clinets send us bunch of Smiles with our <br /> Services and
              we love them
            </p>
          </div>
          <div className={styles.card__bottom__valuesConatiner}>
            <div className={styles.title__card__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/refund.svg" alt="" width={50} height={50} />
              </div>
              <h2>Refund</h2>
            </div>
            <p>
              Our clinets send us bunch of Smiles with our <br /> Services and
              we love them
            </p>
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
                <Image src="/trust.svg" alt="" width={70} height={70} />
              </div>
              <div className={styles.title__card__valuesConatiner}>
                <h2>Trust</h2>
                <p>
                  Our clinets send us bunch of Smiles with our <br /> Services
                  and we love them
                </p>
              </div>
            </div>
            <div className={styles.card__bottom__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/socialGood.svg" alt="" width={70} height={70} />
              </div>
              <div className={styles.title__card__valuesConatiner}>
                <h2>Social Good</h2>
                <p>
                  Our clinets send us bunch of Smiles with our <br /> Services
                  and we love them
                </p>
              </div>
            </div>
            <div className={styles.card__bottom__valuesConatiner}>
              <div className={styles.logo__title__card__valuesConatiner}>
                <Image src="/refund.svg" alt="" width={70} height={70} />
              </div>
              <div className={styles.title__card__valuesConatiner}>
                <h2>Refund</h2>
                <p>
                  Our clinets send us bunch of Smiles with our <br /> Services
                  and we love them
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right__top__valuesConatiner}>
            <div className={styles.bgRadient__right__top__valuesConatiner}>
              <div className={styles.text__right__top__valuesConatiner}>
                <h4>Get in touch</h4>
                <p>
                  Our clinets send us bunch of Smiles with our Services and we
                  love them
                </p>
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
