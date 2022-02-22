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
          <div id="leftButtonScroll" className={styles.arrowContainer}>
            <Image
              className={styles.arrowLeft}
              src="/leftArrow.svg"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
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
              <Image
                className={styles.quoteStart}
                src="/demoUser.png"
                alt=""
                width={30}
                height={30}
              ></Image>
              <div className={styles.userInfo__container}>
                <h5>John Doe</h5>
                <p>CEO, Brand Name</p>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
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
              <Image
                className={styles.quoteStart}
                src="/demoUser.png"
                alt=""
                width={30}
                height={30}
              ></Image>
              <div className={styles.userInfo__container}>
                <h5>John Doe</h5>
                <p>CEO, Brand Name</p>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
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
              <Image
                className={styles.quoteStart}
                src="/demoUser.png"
                alt=""
                width={30}
                height={30}
              ></Image>
              <div className={styles.userInfo__container}>
                <h5>John Doe</h5>
                <p>CEO, Brand Name</p>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s
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
              <Image
                className={styles.quoteStart}
                src="/demoUser.png"
                alt=""
                width={30}
                height={30}
              ></Image>
              <div className={styles.userInfo__container}>
                <h5>John Doe</h5>
                <p>CEO, Brand Name</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <div id="rightButtonScroll" className={styles.arrowContainer}>
            <Image
              className={styles.arrowRight}
              src="/rightArrow.svg"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
