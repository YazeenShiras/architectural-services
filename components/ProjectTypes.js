import React from "react";
import Header from "./Header";
import styles from "../styles/ProjectTypes.module.css";
import Link from "next/link";

const ProjectTypes = () => {
  return (
    <div className={styles.bodyProjectType}>
      <Header />
      <div className={styles.bodyProjectType__container}>
        <h2>Choose your Project Type</h2>
        <form className={styles.personal__form}>
          <div className={styles.radio__personal}>
            <div className={styles.left__radio}>
              <input
                type="radio"
                name="radio__personal"
                value="Professional Account"
                id="proffessional"
              />{" "}
              <label htmlFor="proffessional">Residential</label>
            </div>
            <div className={styles.right__radio}>
              <input
                type="radio"
                name="radio__personal"
                value="Normal Account"
                id="normal"
              />{" "}
              <label htmlFor="normal">Commercial</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectTypes;
