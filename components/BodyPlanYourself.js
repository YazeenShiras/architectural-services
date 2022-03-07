import React, { useState } from "react";
import styles from "../styles/BodyPlanYouself.module.css";
import scrollbarStyles from "../styles/BodyBudget.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

const BodyPlanYourself = () => {
  const [bedrooms, setBedrooms] = useState(5);
  const [attachedBedRooms, setAttachedBedRooms] = useState(5);

  return (
    <div className={styles.bodyPlanYourself}>
      <Header />
      <div className={styles.bodyPlanYourself__container}>
        <div className={styles.image__container__area}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/planyourself.png"
            alt=""
            width={500}
            height={400}
          ></Image>
        </div>
        <div className={styles.content__contanier__area}>
          <h3>
            Plan your dream house <br /> yoursrelf
          </h3>
          <div className={styles.progressBar__container__area}>
            <div className={styles.scroller__contanier}>
              <p>No.of Bedrooms</p>
              <div className={scrollbarStyles.scroller__range__container}>
                <p>1</p>
                <p>10</p>
              </div>
              <ProgressBar percentage={bedrooms} />
              <div className={scrollbarStyles.scroller__limits__container}>
                <p onClick={() => setBedrooms(5)}>01</p>
                <p onClick={() => setBedrooms(15)}>02</p>
                <p onClick={() => setBedrooms(25)}>03</p>
                <p onClick={() => setBedrooms(35)}>04</p>
                <p onClick={() => setBedrooms(48)}>05</p>
                <p onClick={() => setBedrooms(58)}>06</p>
                <p onClick={() => setBedrooms(68)}>07</p>
                <p onClick={() => setBedrooms(80)}>08</p>
                <p onClick={() => setBedrooms(90)}>09</p>
                <p onClick={() => setBedrooms(100)}>10</p>
              </div>
            </div>
            <div className={styles.scroller__contanier}>
              <p>No.of attached Bedrooms</p>
              <div className={scrollbarStyles.scroller__range__container}>
                <p>1</p>
                <p>10</p>
              </div>
              <ProgressBar percentage={attachedBedRooms} />
              <div className={scrollbarStyles.scroller__limits__container}>
                <p onClick={() => setAttachedBedRooms(5)}>01</p>
                <p onClick={() => setAttachedBedRooms(15)}>02</p>
                <p onClick={() => setAttachedBedRooms(25)}>03</p>
                <p onClick={() => setAttachedBedRooms(35)}>04</p>
                <p onClick={() => setAttachedBedRooms(48)}>05</p>
                <p onClick={() => setAttachedBedRooms(58)}>06</p>
                <p onClick={() => setAttachedBedRooms(68)}>07</p>
                <p onClick={() => setAttachedBedRooms(80)}>08</p>
                <p onClick={() => setAttachedBedRooms(90)}>09</p>
                <p onClick={() => setAttachedBedRooms(100)}>10</p>
              </div>
            </div>
          </div>
          <Link href="/requirements" passHref>
            <div className={styles.next__button}>NEXT</div>
          </Link>
          <Link href="/requirements" passHref>
            <p className={styles.skipForNow}>Skip for now &gt;&gt;</p>
          </Link>
        </div>
      </div>
      <div className={styles.footer__container}>
        <Footer />
      </div>
      <div className={styles.footer__container__mobile}>
        <FooterMobile />
      </div>
    </div>
  );
};

export default BodyPlanYourself;
