import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Drive.module.css";
import HeaderLogin from "./HeaderLogin";
import Cookies from "universal-cookie";
import Image from "next/image";

const cookies = new Cookies();

const BodyDocuments = () => {
  useEffect(() => {
    var authenticated = true;
    const accessToken = cookies.get("accessToken");

    if (accessToken) {
      authenticated = true;
    }
    if (!accessToken) {
      authenticated = false;
      window.location.href = "/login";
    }
  }, []);

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
          setAdminData(res.data.response);
        });
    }

    async function paymentDetails() {
      axios
        .get(`https://agriha-services.uc.r.appspot.com/api/cartview/${loginId}`)
        .then(function (res) {
          console.log(res.data);
        });
    }

    documentsFromAdmin();
    paymentDetails();
  }, []);

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <h3>Plan Documents</h3>
        <div className={styles.imageContainer__response}>
          <div className={styles.folderCard}>
            <Image
              className={styles.header__logo}
              src="/locked.svg"
              alt="Arclif Logo"
              width={70}
              height={70}
            />
            <p>{adminData.stage_Description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDocuments;
