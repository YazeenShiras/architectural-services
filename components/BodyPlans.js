import React, { useEffect, useState } from "react";
import styles from "../styles/BodyPlans.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const BodyPlans = () => {
  const [loginId, setLoginId] = useState("");

  const [silver, setSilver] = useState([]);
  const [gold, setGold] = useState([]);
  const [platinum, setPlatinum] = useState([]);

  const [silverServices, setSilverServives] = useState([]);
  const [goldServices, setGoldServices] = useState([]);
  const [platinumServices, setPlatinumServices] = useState([]);

  async function choosePlan(id) {
    console.log(id);

    axios
      .post("https://arclif-services-backend.uc.r.appspot.com/chooseplan", {
        login_id: loginId,
        paymentplan_id: id,
      })
      .then(function (res) {
        console.log(res.data);
        if (res.data.msg === "choose plan added !!") {
          window.location.href = "/adOnServices";
        }
      });
  }

  useEffect(() => {
    const loginIdLoc = localStorage.getItem("loginId");
    setLoginId(loginIdLoc);
  }, []);

  useEffect(() => {
    async function getPlans() {
      axios
        .get("https://arclif-services-backend.uc.r.appspot.com/viewplan")
        .then(function (res) {
          console.log(res.data);
          setSilver(res.data.details[0]);
          setGold(res.data.details[1]);
          setPlatinum(res.data.details[2]);
          setSilverServives(res.data.details[0].plan_services);
          setGoldServices(res.data.details[1].plan_services);
          setPlatinumServices(res.data.details[2].plan_services);
        });
    }
    getPlans();
  }, []);

  return (
    <div className={styles.bodyPlans}>
      <Header />
      <div
        className={styles.bodyPlans__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Choose Best Plans</h3>
        <p>Select best plan for your home</p>
        <div className={styles.cardsContainer__plans}>
          <div className={styles.card__plans}>
            <div className={styles.top_container}>
              <h5>{silver.plan_name}</h5>
              <h4>₹{silver.plan_amount_inlakh}</h4>
              {silverServices.map((plan, index) => {
                return (
                  <div key={index} className={styles.feature__container__plans}>
                    <Image
                      className={styles.bubble2__top__content__main__right}
                      src="/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{plan}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.button__container__plans}>
              <div
                onClick={() => choosePlan(silver._id)}
                className={styles.choosePlan__button}
              >
                SELECT PLAN
              </div>
            </div>
          </div>

          <div className={styles.card__plans__middle}>
            <div className={styles.top_container_gold}>
              <h5>{gold.plan_name}</h5>
              <h4>₹{gold.plan_amount_inlakh}</h4>
              {goldServices.map((plan, index) => {
                return (
                  <div key={index} className={styles.feature__container__plans}>
                    <Image
                      className={styles.bubble2__top__content__main__right}
                      src="/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{plan}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.button__container__plans}>
              <div
                onClick={() => choosePlan(gold._id)}
                className={styles.choosePlan__button__middle}
              >
                SELECT PLAN
              </div>
            </div>
          </div>

          <div className={styles.card__plans}>
            <div className={styles.top_container}>
              <h5>{platinum.plan_name}</h5>
              <h4>₹{platinum.plan_amount_inlakh}</h4>
              <p></p>
              {platinumServices.map((plan, index) => {
                return (
                  <div key={index} className={styles.feature__container__plans}>
                    <Image
                      className={styles.bubble2__top__content__main__right}
                      src="/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{plan}</p>
                  </div>
                );
              })}
            </div>

            <div className={styles.button__container__plans}>
              <div
                onClick={() => choosePlan(platinum._id)}
                className={styles.choosePlan__button}
              >
                SELECT PLAN
              </div>
            </div>
          </div>
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

export default BodyPlans;
