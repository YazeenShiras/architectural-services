import React from "react";
import styles from "../styles/Quotes.module.css";
import Image from "next/image";

const Quotes = () => {
  /* const leftScroll = () => {
    var container = document.getElementById("quoteContainer");
    var leftButton = document.getElementById("leftButtonScroll");
    var rightButton = document.getElementById("rightButtonScroll");
    var scrollWidth = container.scrollWidth;
    container.scrollWidth += 100;
  }; */

  return (
    <div id="testimonials" className={styles.quotes}>
      <div className={styles.quotes__contanier}>
        <div className={styles.buttonContainer}>
          {/*  <div id="leftButtonScroll" className={styles.arrowContainer}>
            <Image
              className={styles.arrowLeft}
              src="/leftArrow.svg"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div> */}
        </div>
        <div className={styles.contents__quote__container} id="quoteContainer">
          <div className={styles.card__quote__container}>
            <Image
              className={styles.quoteStart}
              src="/quoteStart.svg"
              alt=""
              width={30}
              height={30}
            ></Image>
            <p>
              Arclif has very professional and approachable architecture team.
              The whole procedure starting from planning home design till
              execution went extremely smooth. We now have a beautiful home
              which is exactly as I envisaged. I will recommend them to any of
              my friends and relatives who need to design their home.
            </p>
            <div className={styles.quoteEnd__container}>
              <Image
                className={styles.quoteStart}
                src="/quoteEnd.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </div>
            <div className={styles.userProfile__container}>
              {/* <Image
                className={styles.quoteStart}
                src="/demoUser.png"
                alt=""
                width={30}
                height={30}
              ></Image> */}
              <div className={styles.userInfo__container}>
                <h5>- Mohammed Sadhik</h5>
                {/* <p>CEO, Brand Name</p> */}
              </div>
            </div>
          </div>

          <div className={styles.card__quote__container}>
            <Image
              className={styles.quoteStart}
              src="/quoteStart.svg"
              alt=""
              width={30}
              height={30}
            ></Image>
            <p>
              We love our newly designed home, Great ideas and designs. All
              thanks to the team from Arclif. Through out the design phase
              communication has been of the very highest standard. We look
              forward to work with them again.
            </p>
            <div className={styles.quoteEnd__container}>
              <Image
                className={styles.quoteStart}
                src="/quoteEnd.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </div>
            <div className={styles.userProfile__container}>
              {/* <Image
                className={styles.quoteStart}
                src="/demoUser.png"
                alt=""
                width={30}
                height={30}
              ></Image> */}
              <div className={styles.userInfo__container}>
                <h5>- Sabu Haji</h5>
                {/* <p>CEO, Brand Name</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          {/* <div id="rightButtonScroll" className={styles.arrowContainer}>
            <Image
              className={styles.arrowRight}
              src="/rightArrow.svg"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
