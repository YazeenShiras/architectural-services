/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "../styles/BodyAdOnServices.module.css";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const BodyAdOnServices = () => {
  var authenticated = true;

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    authenticated = true;
  }
  if (!accessToken) {
    authenticated = false;
    window.location.href = "/login";
  }

  const [loginId, setLoginId] = useState("");
  const [allData, setAllData] = useState([]);

  const [selectedData, setSelectedData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const loginIdLoc = localStorage.getItem("loginId");
    setLoginId(loginIdLoc);
  }, []);

  useEffect(() => {
    async function getAdOns() {
      axios
        .get("https://agriha-services.uc.r.appspot.com/viewadonservices")
        .then(function (res) {
          setAllData(res.data.details);
        });
    }
    getAdOns();
  }, []);

  async function chooseAdOn() {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";

    axios
      .post("https://agriha-services.uc.r.appspot.com/chooseAdon", {
        login_id: loginId,
        adonservice_name: selectedData,
        total_amount: totalAmount,
      })
      .then(function (res) {
        if (res.data.msg === "user adon services added !!") {
          window.location.href = "/confirmplan";
        }
      });
  }

  const selectAdOn = (name) => {
    setSelectedData((selectedData) => [...selectedData, name]);
  };

  return (
    <div className={styles.bodyAdOnServices}>
      <Header />
      <div className={styles.bodyAdOnServicesContainer}>
        <div className={styles.titleAdOnServices}>
          <h3>Add On Services</h3>
          <p>Choose your services</p>
        </div>
        <div className={styles.cardContainer}>
          {allData.map((data, index) => {
            return (
              <div key={index} className={styles.cardAdonServices}>
                <input
                  onClick={() => selectAdOn(data.adonservicename)}
                  type="checkbox"
                />
                {data.adonservicename}({data.adonservicedescription})
              </div>
            );
          })}
        </div>
        <div onClick={chooseAdOn} className={styles.next__button}>
          <div className={styles.loader__container__next} id="loaderNext">
            <PulseLoader color="#ffffff" />
          </div>
          <p id="nextText">NEXT</p>
        </div>
        <div className={styles.termsAndConditionsContainer}>
          <h5>Terms and conditions</h5>
          <ul>
            <li>
              Final Price may vary depending upon plot and site conditions,
              location, add on services and any other miscellaneous situations.
            </li>
            <li>
              Choose the perfect subscription plan that helps you to build your
              dream home The above rates are applicable for minimum 1200 sq.ft.
              Built up area and plots located within 30 Kms radius of Calicut.
            </li>
            <li>
              For other cities/metros, pricing will be provided on request
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer__container}>
        <Footer />
      </div>
      <div className={styles.footer__container__mobile}>
        <FooterMobile />
      </div>
    </div>
  );
};

export default BodyAdOnServices;
