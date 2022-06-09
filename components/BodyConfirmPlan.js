import React, { useEffect, useState, useCallback } from "react";
import styles from "../styles/BodyPlans.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import axios from "axios";
import useRazorpay from "react-razorpay";
import { PulseLoader } from "react-spinners";
import Link from "next/link";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const BodyConfirmPlan = () => {
  var authenticated = true;

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    authenticated = true;
  }
  if (!accessToken) {
    authenticated = false;
  }

  const Razorpay = useRazorpay();

  const [loginId, setLoginId] = useState("");

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const [plan, setPlan] = useState([]);
  const [planServices, setPlanServices] = useState([]);

  const [orderid, setOrderid] = useState("");
  const [amount, setAmount] = useState(0);

  const [totalAmount, setTotalAmount] = useState("");

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
          `https://agriha-services.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
          setPhone(res.data.details.logindetails[0].phonenumber);
        });
    }

    async function userPlan() {
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getuserplan`, {
          login_id: loginId,
        })
        .then(function (res) {
          setPlan(res.data.details);
          setPlanServices(res.data.details.plan_services);
          setTotalAmount(plan.amount_per_sqrft * area);
        });
    }

    if (loginId !== "" && loginId !== undefined) {
      userDetails();
      userPlan();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginId]);

  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_live_N1mEU44ddNNCyY",
      amount: plan.initial_payment * 100,
      currency: "INR",
      name: "Agriha Payment",
      description: "",
      image: "/agrihaLogo.png",
      order_id: orderid,
      callback_url: `https://agriha-services.uc.r.appspot.com/verifyPayment/${loginId}`,
      redirect: true,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: `${name}`,
        email: `${email}`,
        contact: `${phone}`,
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
  }, [Razorpay, name, email, phone, orderid, loginId, plan]);

  async function paymnetOrder() {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";

    axios
      .post(`https://agriha-services.uc.r.appspot.com/paymentOrder`, {
        amount: plan.amount_per_sqrft * area,
        userId: loginId,
        paymentmode: "downpayment",
      })
      .then(function (res) {
        console.log(res);
        console.log(plan.amount_per_sqrft * area);
        setAmount(res.data.order.amount_due);
        setOrderid(res.data.order.id);
        if (res.data.status === 200) {
          handlePayment();
        }
      });
  }

  return (
    <div className={styles.bodyPlans}>
      <Header />
      <div
        className={styles.bodyPlans__container__confirm}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Confirm your Plan</h3>
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
            <p>Plan & Amount</p>
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
                <p className={styles.chooseAmountTitle}>Amount</p>
              </div>
              <div
                className={styles.card__plans__right__confirm__top__container}
              >
                <div
                  className={
                    styles.card__plans__right__confirm__top__subContainer
                  }
                >
                  {/* <input
                    type="radio"
                    name="radio"
                    onClick={() => payOption(plan.amount_per_sqrft * area)}
                  />{" "} */}
                  <p>Total Amount</p>
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
                  <input type="radio" name="radio" checked />{" "}
                  <p>Down Payment</p>
                </div>
                <p>₹{plan.initial_payment}</p>
              </div>
            </div>
            <div onClick={paymnetOrder} className={styles.paymnet__button}>
              <div className={styles.loader__container__next} id="loaderNext">
                <PulseLoader color="#ffffff" />
              </div>
              <p id="nextText">MAKE PAYMENT</p>
            </div>
            <Link href="/login" passHref>
              <div className={styles.paymnet__button}>
                <div className={styles.loader__container__next} id="loaderNext">
                  <PulseLoader color="#ffffff" />
                </div>
                <p id="nextText">PAY LATER</p>
              </div>
            </Link>
            <div className={styles.info__container__confirm}>
              <Image src="/info.svg" alt="" width={25} height={25}></Image>
              <p>
                You have to pay Down payment for unlock our services, pay total
                amount after registration complete.
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
