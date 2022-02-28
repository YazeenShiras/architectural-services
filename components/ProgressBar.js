import React from "react";
import styles from "../styles/ProgressBar.module.css";

const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.circleEnd__progressBar}></div>
      <div className={styles.circleEnd__progressBar}></div>
    </div>
  );
};

export default ProgressBar;
