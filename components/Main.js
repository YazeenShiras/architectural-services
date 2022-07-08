import React from "react";
import styles from "../styles/Main.module.css";

const Main = () => {
  return (
    <div>
      <div className={styles.main} id="home">
        <div className={styles.main__left}>
          <h1>
            Design your dream <br />
            home with a few clicks
          </h1>
          <p>
            We offer wide range of architecture services creating perfect living
            space you love to live in.
          </p>
          <div className={styles.buttoneContainer__main__left}>
            <a href="sendotp" className={styles.designMyHomeButton}>
              DESIGN MY HOME
            </a>
            <a href="login" className={styles.signInButton}>
              SIGN IN
            </a>
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
        <h1>Design your dream home with a few clicks</h1>
        <p>
          We offer wide range of architecture services creating perfect living
          space you love to live in.
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
