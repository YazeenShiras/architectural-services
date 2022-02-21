import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const FooterMobile = () => {
  return (
    <div className={styles.footer__mobile}>
      <div className={styles.title__footer__mobile}>
        <div className={styles.logo__footer__mobile}>
          <a href="https://arclif.com">
            <Image
              src="/arclifLogo.svg"
              width={90}
              height={30}
              alt="arclifLogo"
            />
          </a>
        </div>
        <p>
          Arclif.com is an online architecture service platform founded in 2016
          to connect Architects, Designers, Home Contractors and Building
          Suppliers closer to Home seekers with their products and services
          across the world considering the scenario in construction industry.
        </p>
      </div>
      <div className={styles.contents__footer__mobile}>
        <div className={styles.left__content__footer__mobile}>
          <h4>What arclif provides</h4>
          <div className={styles.links__left__content__footer__mobile}>
            <div className={styles.linksLeft__left__content__footer__mobile}>
              <ul>
                <li>Jobs</li>
                <li>Estimator</li>
                <li>Requirements</li>
                <li>Charity</li>
                <li>Q&A</li>
              </ul>
            </div>
            <div className={styles.linksRight__left__content__footer__mobile}>
              <ul>
                <li>Marketplace</li>
                <li>Projects</li>
                <li>Companies</li>
                <li>Proffessional</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.right__content__footer__mobile}>
          <h4>Quick Links</h4>
          <div className={styles.links__right__content__footer__mobile}>
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.followContainer__footer__mobile}>
            <h5>Follow</h5>
            <div className={styles.socialIcon__contanier}>
              <Link href="https://www.instagram.com/arclifonline/" passHref>
                <Image
                  src="/instagram__icon.svg"
                  width={12}
                  height={12}
                  alt=""
                  className={styles.socialIcon}
                />
              </Link>
              <Link href="https://www.facebook.com/arclifonline/" passHref>
                <Image
                  src="/facebook__icon.svg"
                  alt=""
                  width={12}
                  height={12}
                  className={styles.socialIcon}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.credits__footer__mobile}>
        <p>© Copyright 2021 arclif.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterMobile;
