import React from "react";
import HeaderLogin from "./HeaderLogin";
import styles from "../styles/Drive.module.css";
import Image from "next/image";
import Link from "next/link";

const DriveDocument = () => {
  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.foldersContainer__top}>
          <div className={styles.top_container_drive}>
            <h3>Plan Documents</h3>
            <div className={styles.foldersContainer}>
              <div className={styles.folderCard}>
                <Image
                  className={styles.header__logo}
                  src="/locked.svg"
                  alt="Arclif Logo"
                  width={70}
                  height={70}
                />
                <p>Stage 1</p>
              </div>
              <div className={styles.folderCard}>
                <Image
                  className={styles.header__logo}
                  src="/locked.svg"
                  alt="Arclif Logo"
                  width={70}
                  height={70}
                />
                <p>Stage 2</p>
              </div>
              <div className={styles.folderCard}>
                <Image
                  className={styles.header__logo}
                  src="/locked.svg"
                  alt="Arclif Logo"
                  width={70}
                  height={70}
                />
                <p>Stage 3</p>
              </div>
            </div>
          </div>
          <div className={styles.center_container_drive}>
            <h3>Your Documents</h3>
            <div className={styles.foldersContainer}>
              <div className={styles.folderCard}>
                <Image
                  className={styles.header__logo}
                  src="/folderIcon.svg"
                  alt="Arclif Logo"
                  width={70}
                  height={70}
                />
                <p>Uploaded</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.uploadOwn__Container}>
          <h3>Upload your Dream Home Concept</h3>
          <div className={styles.uploaded__image__container}></div>
          <div className={styles.upload__button}>Upload Image Files</div>
        </div>
      </div>
    </div>
  );
};

export default DriveDocument;
