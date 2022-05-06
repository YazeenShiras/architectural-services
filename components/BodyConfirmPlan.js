import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/BodyPlans.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import useRazorpay from "react-razorpay";

const BodyConfirmPlan = () => {
  const Razorpay = useRazorpay();
  const [loginId, setLoginId] = useState("");

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  const [plan, setPlan] = useState([]);
  const [planServices, setPlanServices] = useState([]);

  const [orderid, setOrderid] = useState("");

  useEffect(() => {
    const loginIdLoc = localStorage.getItem("loginId");
    setLoginId(loginIdLoc);
  }, []);

  useEffect(() => {
    const areaLoc = localStorage.getItem("totalArea");
    setArea(areaLoc);
    async function userDetails() {
      axios
        .get(
          `https://arclif-services-backend.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          console.log(res.data);
          console.log(res.data.details.userdetails[0]);
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
        });
    }

    async function userPlan() {
      axios
        .post(`https://arclif-services-backend.uc.r.appspot.com/getuserplan`, {
          login_id: loginId,
        })
        .then(function (res) {
          console.log(res.data);
          setPlan(res.data.details);
          setPlanServices(res.data.details.plan_services);
        });
    }

    async function paymnetOrder() {
      axios
        .post(`https://arclif-service-payment.herokuapp.com/api/paymentOrder`, {
          amount: plan.amount_per_sqrft * area,
          userId: loginId,
        })
        .then(function (res) {
          console.log(res.data);
          setOrderid(res.data.id);
        });
    }

    if (loginId !== "" && loginId !== undefined) {
      userDetails();
      userPlan();
      paymnetOrder();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginId]);

  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_ebPS0dfN5A4uYA",
      amount: "1500",
      currency: "INR",
      name: "Arclif Payment",
      description: "",
      image: "",
      order_id: orderid,
      callback_url: `https://arclif-service-payment.herokuapp.com/api/verifyPayment/${loginId}`,
      redirect: true,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: `${name}`,
        email: ``,
        contact: ``,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#1c9c76",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, name, orderid, loginId]);

  return (
    <div className={styles.bodyPlans}>
      <Header />
      <div
        className={styles.bodyPlans__container__confirm}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Confirm your Plan</h3>
        <p>Lorem ipsum dolor</p>
        <div className={styles.cardsContainer__plans__confirm}>
          <div className={styles.card__plans__left__confirm}>
            <p className={styles.name__card__plans__left__confirm}>
              Hi, {name}
            </p>
            <p className={styles.message__card__plans__left__confirm}>
              You have choosen {plan.plan_name} plan for your home construction,
              your plan includes below features and the rate you have to pay.
            </p>
            <h5>Plan Features</h5>

            {planServices.map((data, index) => {
              return (
                <div key={index} className={styles.feature__container__plans}>
                  <Image
                    className={styles.bubble2__top__content__main__right}
                    src="/check.svg"
                    alt=""
                    width={12}
                    height={12}
                  ></Image>
                  <p>{data}</p>
                </div>
              );
            })}
            <div className={styles.container__planDetails}>
              <div className={styles.left__planDetails__bottom}>
                <h5>
                  ₹{plan.amount_per_sqrft} <span>X</span> {area} Sq.ft
                </h5>
              </div>
              <div className={styles.right__planDetails__bottom}>
                <h5>₹{plan.amount_per_sqrft * area}</h5>
              </div>
            </div>
          </div>

          <div className={styles.card__plans__right__confirm}>
            <p>Total Amount</p>
            <h4>{plan.plan_name}</h4>
            <div className={styles.card__plans__right__confirm__top}>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <p>Total Area</p>
                <p>{area} Sq.ft</p>
              </div>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <p>Amount Per sq.ft</p>
                <p>₹{plan.amount_per_sqrft}</p>
              </div>
            </div>
            <div className={styles.card__plans__right__confirm__middle}>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <p>Total Payable</p>
                <p>₹{plan.amount_per_sqrft * area}</p>
              </div>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <div
                  className={
                    styles.card__plans__right__confirm__top__subContainer
                  }
                >
                  <input type="radio" id="radio" />{" "}
                  <p>
                    Total <br /> Amount
                  </p>
                </div>
                <p>₹{plan.amount_per_sqrft * area}</p>
              </div>
            </div>
            <div className={styles.card__plans__right__confirm__bottom}>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <div
                  className={
                    styles.card__plans__right__confirm__top__subContainer
                  }
                >
                  <input type="radio" id="radio" />{" "}
                  <p>Down Payment(launch offer)</p>
                </div>
                <p>₹{plan.initial_payment}</p>
              </div>
            </div>
            <div onClick={handlePayment} className={styles.paymnet__button}>
              MAKE PAYMENT
            </div>
            <div className={styles.info__container__confirm}>
              <Image src="/info.svg" alt="" width={25} height={25}></Image>
              <p>
                You can choose either payment methodes, pay in full or down
                payment
              </p>
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

export default BodyConfirmPlan;
