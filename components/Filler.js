import React from "react";
import styles from "../styles/ProgressBar.module.css";

const Filler = (props) => {
  return (
    <div className={styles.filler} style={{ width: `${props.percentage}%` }} />
  );
};

export default Filler;
