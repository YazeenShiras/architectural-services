import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div>
      <div className={styles.main} id="home">
        <div className={styles.main__left}>
          <h1>
            <span>Design</span> your dream <br />
            home with a few clicks
          </h1>
          <p>
            AGRIHA is an initiative by Arclif Inc. to empower the home seeker to{" "}
            <br />
            dream and design their perfect home online with just few clicks.
          </p>
          <div className={styles.buttoneContainer__main__left}>
            <a href="sendotp" className={styles.designMyHomeButton}>
              DESIGN MY HOME
            </a>
            <a href="login" className={styles.signInButton}>
              SIGN IN
            </a>
          </div>
          <div className={styles.scrollStatusContainer}>
            <span></span>
            <span></span>
            <span className={styles.scrollActive}></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.main__right}>
          <div
            style={{ backgroundImage: `url("/heroBg.png")` }}
            className={styles.heroImage}
          ></div>
        </div>
      </div>

      <div className={styles.mainMobile}>
        <h1>
          <span>Design</span> your dream home with a few clicks
        </h1>
        <p>
          AGRIHA is an initiative by Arclif Inc. to empower the home seeker to
          dream and design their perfect home online with just few clicks.
        </p>
        <div className={styles.buttoneContainer__main__left}>
          <a href="sendotp" className={styles.designMyHomeButton}>
            DESIGN MY HOME
          </a>
          <a href="login" className={styles.signInButton}>
            SIGN IN
          </a>
        </div>
        <div
          style={{ backgroundImage: `url("/heroBg.png")` }}
          className={styles.hero__mobile__image}
        ></div>
      </div>
    </div>
  );
};

export default Main;
