import React, { useEffect, useState } from "react";
import styles from "../styles/BodyRequirements.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import axios from "axios";

import { Requirements } from "./data";

const BodyRequirements = () => {
  const [requirements, setRequirements] = useState([]);
  const [loginId, setLoginId] = useState("");

  useEffect(() => {
    const logId = localStorage.getItem("loginId");
    setLoginId(logId);
    console.log(Requirements);
  }, []);

  async function setRequirementsList() {
    axios
      .post(
        "https://arclif-services-backend.uc.r.appspot.com/setrequirementslist",
        {
          login_id: loginId,
          requirements_list: requirements,
        }
      )
      .then(function (res) {
        console.log(res.data);
        if (res.data.msg === "Requirementslist added !!") {
          window.location.href = "/validate";
        }
      });
  }

  return (
    <div className={styles.bodyRequirements}>
      <Header />
      <div
        className={styles.bodyRequirements__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Plan your dream home</h3>
        <p>Choose your requirements</p>

        <div className={styles.requiremnetCardContainer}>
          {Requirements.map((r, index) => {
            return (
              <div
                onClick={() =>
                  setRequirements((requirements) => [...requirements, r])
                }
                key={index}
                className={styles.requirementCard}
              >
                <label>
                  <input
                    onClick={() =>
                      setRequirements((requirements) => [...requirements, r])
                    }
                    type="checkbox"
                  />
                  {r}
                </label>
              </div>
            );
          })}
        </div>
        <div onClick={setRequirementsList} className={styles.next__button}>
          NEXT
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

export default BodyRequirements;
