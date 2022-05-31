import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Drive.module.css";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";

const BodyDocuments = () => {
  const [id, setId] = useState("");
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);
    console.log(loginId);

    async function documentsFromAdmin() {
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getfilesfromadmin`, {
          id: loginId,
        })
        .then(function (res) {
          console.log(res.data);
        });
    }

    documentsFromAdmin();
  }, []);

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <h3>Plan Documents</h3>
        <div className={styles.imageContainer__response}></div>
      </div>
    </div>
  );
};

export default BodyDocuments;
