import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.left__footer__top}>
            <div className={styles.logo__footer}>
              <a href="https://arclif.com">
                <Image src="/arclifLpgo2.svg" width={100} height={40} alt="" />
              </a>
            </div>
            <p>
              Arclif.com is an online architecture service platform founded in
              2016 to connect Architects, Designers, Home Contractors and
              Building Suppliers closer to Home seekers with their products and
              services across the world considering the scenario in construction
              industry.
            </p>
            <div className={styles.socialContainer__footer__left}>
              <a href="https://www.facebook.com/arclifonline/">
                <Image src="/facebookIcon2.svg" alt="" width={16} height={16} />
              </a>
              <a href="https://arclif.com/">
                <Image src="/webIcon2.svg" alt="" width={16} height={16} />
              </a>
              <a href="https://in.linkedin.com/company/arclif">
                <Image src="/linkedInIcon2.svg" alt="" width={16} height={16} />
              </a>
              <a href="https://www.instagram.com/arclifonline">
                <Image
                  src="/instagramIcon2.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
          <div className={styles.right__footer__top}>
            <div className={styles.QuickLinks__right__footer__top}>
              <h3>Quick Links</h3>
              <div>
                <a href="#aboutUs">About</a>
                <a href="#contact">Help</a>
                <a href="#terms">Terms</a>
                <a href="#privacyPolicy">Privacy Policy</a>
                <a href="#QnA">Q & A</a>
              </div>
            </div>
            <div className={styles.QuickLinks__right__footer__top}>
              <h3>What we provides</h3>
              <div>
                <a href="">Jobs</a>
                <a href="">Estimator</a>
                <a href="">Requirements</a>
                <a href="">Marketplace</a>
              </div>
            </div>
            <div className={styles.QuickLinks__right__footer__top}>
              <h3>What we provides</h3>
              <div>
                <a href="">Jobs</a>
                <a href="">Estimator</a>
                <a href="">Requirements</a>
                <a href="">Marketplace</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p> &copy; Copyright 2021 arclif.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
