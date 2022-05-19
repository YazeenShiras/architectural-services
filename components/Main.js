import React from "react";
import styles from "../styles/Main.module.css";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__left}>
        <div className={styles.content__main__left}>
          <div className={styles.top__content__main__left}>
            <Image
              className={styles.img__top__content__main__left}
              src="/bubble1.png"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div>
          <h1>
            Build your dream <br /> home with a few <br /> clicks!
          </h1>
          <p>
            AGRIHA is an initiative by Arclif Inc. to empower the home seeker to
            dream and design their perfect home online with just few clicks. We
            offer supporting architecture services starting from home plans to
            execution to create the best living spaces for our customers in
            designing the perfect living space for their needs, desires and
            lifestyle.
            <br />
            Got a great idea for your new house? Let&apos;s start from scratch
            and design your home!
          </p>
          <div className={styles.actionContainer__main__left}>
            <div className={styles.subHeading__main__right}></div>
            <Link href="/sendotp" passHref>
              <div className={styles.tryNow__button__main__right}>
                DESIGN MY HOME
              </div>
            </Link>
          </div>
          <div className={styles.bottom__content__main__left}>
            <Image
              className={styles.img__bottom__content__main__left}
              src="/bubble2.png"
              alt=""
              width={40}
              height={50}
            ></Image>
            <Image
              className={styles.imgTwo__bottom__content__main__left}
              src="/bubble3.png"
              alt=""
              width={13}
              height={13}
            ></Image>
          </div>
          <div id="aboutUs" className={styles.about__section__main__left}>
            <h3>About Us</h3>
            <p>
              We are a team of of dedicated professionals committed to creating
              beautiful and sustainable homes. We believe in the power of
              architecture to shape urban environments, improve quality of life
              and positively impact society. AGRIHA offers complete design-build
              services to meet the needs of our clients from concept through
              completion. Our goal is to be the go-to source for high quality
              architecture. We have extensive experience in working with
              different high end projects across Kerala incorporating our
              knowledge of both domestic and global trends.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.main__right}>
        <div className={styles.content__main__right}>
          <div className={styles.top__content__main__right}>
            <Image
              className={styles.img__top__content__main__left}
              src="/main2.png"
              alt=""
              width={550}
              height={380}
            ></Image>
            <div className={styles.bubble__content__main__right}>
              <Image
                className={styles.bubble__top__content__main__right}
                src="/bubble4.png"
                alt=""
                width={45}
                height={60}
              ></Image>
            </div>
          </div>
          <div className={styles.actionContainer__main__right}>
            <div className={styles.subHeading__main__right}>
              <Image
                className={styles.bubble2__top__content__main__right}
                src="/bubble2.png"
                alt=""
                width={40}
                height={50}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
