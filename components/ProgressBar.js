import React from "react";
import styles from "../styles/ProgressBar.module.css";
import Filler from "./Filler";

const ProgressBar = (props) => {
  return (
    <div className={styles.progressBar}>
      <Filler percentage={props.percentage} />

      {/* <div className={styles.circleEnd__progressBar}></div>
      <div className={styles.circleEnd__progressBar}></div> */}
    </div>
  );
};

export default ProgressBar;
