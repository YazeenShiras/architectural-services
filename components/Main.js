import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div>
      <div
        className={styles.main}
        id="home"
        style={{ backgroundImage: `url("/heroMain.png")` }}
      >
        <h1>Design your Space with few clicks</h1>
        <p>
          We offer wide range of architecture services, starting from home
          plans, floor plans, site plans etc. to create perfect living space you
          love to live in.
        </p>
        <div className={styles.buttoneContainer__main__left}>
          <a href="sendotp" className={styles.designMyHomeButton}>
            DESIGN MY SPACE
          </a>
          <a href="login" className={styles.signInButton}>
            SIGN IN
          </a>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url("/heroMain.png")` }}
        className={styles.mainMobile}
      >
        <h1>Design your Space with few clicks</h1>
        <p>
          We offer wide range of architecture services, starting from home
          plans, floor plans, site plans etc. to create perfect living space you
          love to live in.
        </p>
        <div className={styles.buttoneContainer__main__left}>
          <a href="sendotp" className={styles.designMyHomeButton}>
            DESIGN MY SPACE
          </a>
          <a href="login" className={styles.signInButton}>
            SIGN IN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
