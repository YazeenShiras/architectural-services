import React from "react";
import styles from "../styles/AboutUs.module.css";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs} id="aboutUs">
      <div className={styles.left__aboutUs}>
        <div className={styles.titleMobile__aboutUs}>
          <h2>About Us</h2>
          <h4>Design your dream home</h4>
        </div>
        <div>
          <Image src="/aboutImg.png" alt="" width={500} height={500} />
        </div>
      </div>
      <div className={styles.right__aboutUs}>
        <h2>About Us</h2>
        <h4>Design your dream home</h4>
        <p>
          Easly your Estimate Price your Home Design. Please fill your correct
          data on belowEasly your Estimate Price your Home Design. Please fill
          your correct data on belowEasly your Estimate Price your Home Design.
          Please fill your correct data on belowEasly your Estimate Price your
          Home Design. Please fill your correct data on belowEasly your Estimate
          Price your Home Design. Please fill your correct data on belowEasly
          your Estimate Price your Home Design. Please fill your correct data on
          belowEasly your Estimate Price your Home Design. Please fill your
          correct data on belowEasly your Estimate Price your Home Design.
        </p>
        <div className={styles.buttonContainer__aboutUs}>
          <a
            href="https://youtu.be/f4QVsOnWLwY"
            className={styles.watchVideo__button}
          >
            <div>
              <Image src="/playButton.svg" alt="" width={20} height={10} />
            </div>
            Watch video
          </a>
          <a href="#contact" className={styles.contactUs__button}>
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
