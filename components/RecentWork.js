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
          Arclif have already delivered numerous projects all over India.
          Quality and timely delivery of projects are our key strength...
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
          style={{ backgroundImage: `url('/image2.jpg')` }}
        >
          <div className={styles.effect__img__recentWorks__first}></div>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image11.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image4.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image3.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/Image2.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image5.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image6.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image7.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image8.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image9.jpg" alt="" width={300} height={200}></Image>
        </div>
        <div className={styles.imgCard__recentWorks}>
          <Image src="/image10.jpg" alt="" width={300} height={200}></Image>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
