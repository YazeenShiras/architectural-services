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
                <Image src="/arclifLogo.png" width={90} height={30} alt="" />
              </a>
            </div>
            <p>
              Arclif.com is an online architecture service platform founded in
              2016 to connect Architects, Designers, Home Contractors and
              Building Suppliers closer to Home seekers with their products and
              services across the world considering the scenario in construction
              industry.
            </p>
          </div>
          <div className={styles.center__footer__top}>
            <div className={styles.left__center__footer}>
              <h4>What arclif provides</h4>
              <div className={styles.content__cf}>
                <div className={styles.left__content__cf}>
                  <ul>
                    <li>Jobs</li>
                    <li>Estimator</li>
                    <li>Requirements</li>
                    <li>Charity</li>
                    <li>Q&A</li>
                  </ul>
                </div>
                <div className={styles.right__content__cf}>
                  <ul>
                    <li>Marketplace</li>
                    <li>Projects</li>
                    <li>Companies</li>
                    <li>Proffessional</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.right__center__footer}>
              <h4>Quick links</h4>
              <div className={styles.content__cf}>
                <div className={styles.left__content__cf}>
                  <ul>
                    <li>Jobs</li>
                    <li>Estimator</li>
                    <li>Requirements</li>
                    <li>Charity</li>
                    <li>Q & A</li>
                  </ul>
                </div>
                <div className={styles.right__content__cf}>
                  <ul>
                    <li>Marketplace</li>
                    <li>Projects</li>
                    <li>Companies</li>
                    <li>Proffesional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right__footer__top}>
            <h4>Quick Links</h4>
            <div className={styles.content__rf}>
              <ul>
                <li>About</li>
                <li>Help</li>
                <li>Terms</li>
                <li>Privacy Policy</li>
                <li>
                  <div className={styles.social__footer}>
                    <p>Follow</p>
                    <div className={styles.socialIcon__contanier}>
                      <Link
                        href="https://www.instagram.com/arclifonline/"
                        passHref
                      >
                        <Image
                          src="/instagram__icon.svg"
                          width={12}
                          height={12}
                          alt=""
                          className={styles.socialIcon}
                        />
                      </Link>
                      <Link
                        href="https://www.facebook.com/arclifonline/"
                        passHref
                      >
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
                </li>
              </ul>
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
