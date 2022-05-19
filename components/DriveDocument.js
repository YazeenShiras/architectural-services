import React from "react";
import HeaderLogin from "./HeaderLogin";

const DriveDocument = () => {
  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.top_container_drive}></div>
      </div>
    </div>
  );
};

export default DriveDocument;
