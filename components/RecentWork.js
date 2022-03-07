import React from "react";
import styles from "../styles/RecentWork.module.css";
import Image from "next/image";
import Link from "next/link";

const RecentWork = () => {
  return (
    <div className={styles.recentWork}>
      <div className={styles.titleContainer__recentWork}>
        <h3>Our Recent Work</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </p>
        {/* <div className={styles.buttonContainer__recentWorks}>
          <div className={styles.leftArrowRecent}>
            <Image
              src="/leftArrowRecent.svg"
              alt=""
              width={15}
              height={15}
            ></Image>
          </div>
          <div className={styles.rightArrowRecent}>
            <Image
              src="/rightArrowRecent.svg"
              alt=""
              width={15}
              height={15}
            ></Image>
          </div>
        </div> */}
      </div>
      <div className={styles.content__recentWorks__container}>
        <div
          className={styles.imgCard__recentWorks__first}
          style={{ backgroundImage: `url('/recentImg1.png')` }}
        >
          <div className={styles.effect__img__recentWorks__first}></div>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/recentImg2.png" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/recentImg3.png" alt="" width={300} height={200}></Image>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
