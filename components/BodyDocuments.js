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

        <div className={styles.stageOne__container}>
          <div className={styles.stageTitle__container}>
            <h4>Stage 1</h4>
            <div id="satgeOne__lock">
              <Image
                className={styles.header__logo}
                src="/lock.png"
                alt="Arclif Logo"
                width={15}
                height={15}
              />
            </div>
          </div>
          <div className={styles.folderCardContainer__stages}>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/imageFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/pdfFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
          </div>
        </div>

        <div className={styles.stageOne__container}>
          <div className={styles.stageTitle__container}>
            <h4>Stage 2</h4>
            <div id="satgeOne__lock">
              <Image
                className={styles.header__logo}
                src="/lock.png"
                alt="Arclif Logo"
                width={15}
                height={15}
              />
            </div>
          </div>
          <div className={styles.folderCardContainer__stages}>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/imageFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/pdfFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
          </div>
        </div>

        <div id="stage_two_docs" className={styles.stageOne__container}>
          <div className={styles.stageTitle__container}>
            <h4>Stage 3</h4>
            <div id="satgeOne__lock">
              <Image
                className={styles.header__logo}
                src="/lock.png"
                alt="Arclif Logo"
                width={15}
                height={15}
              />
            </div>
          </div>
          <div className={styles.folderCardContainer__stages}>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/imageFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/pdfFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
          </div>
        </div>

        <div id="stage_two_docs" className={styles.stageOne__container}>
          <div className={styles.stageTitle__container}>
            <h4>Stage 4</h4>
            <div id="satgeOne__lock">
              <Image
                className={styles.header__logo}
                src="/lock.png"
                alt="Arclif Logo"
                width={15}
                height={15}
              />
            </div>
          </div>
          <div className={styles.folderCardContainer__stages}>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/imageFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
            <div className={styles.folderCard}>
              <Image
                className={styles.header__logo}
                src="/pdfFile.svg"
                alt="Arclif Logo"
                width={60}
                height={60}
              />
              <p>{adminData.stage_Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyDocuments;
