import React, { useEffect, useState, useCallback } from "react";
import HeaderLogin from "./HeaderLogin";
import styles from "../styles/StagePayment.module.css";
import axios from "axios";
import useRazorpay from "react-razorpay";
import { PulseLoader } from "react-spinners";

const StagePayments = () => {
  const Razorpay = useRazorpay();

  const [id, setId] = useState("");
  const [plan, setPlan] = useState([]);
  const [planServices, setPlanServices] = useState([]);
  const [noOfStages, setNoOfStages] = useState("");
  const [stageOne, setStageOne] = useState([]);
  const [stageTwo, setStageTwo] = useState([]);
  const [stageThree, setStageThree] = useState([]);
  const [stageFour, setStageFour] = useState([]);

  const [amount, setAmount] = useState(0);

  const [buildingDetails, setBuildingDetails] = useState([]);

  const [totalAmount, setTotalAmount] = useState("");

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [orderid, setOrderid] = useState("");

  const [orderIdStage, setOrderIdStage] = useState("");

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);

    async function userDetails() {
      axios
        .get(
          `https://arclif-services-backend.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          console.log(res.data);
          console.log(res.data);
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
          setMobile(res.data.details.logindetails[0].phonenumber);
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
          setNoOfStages(res.data.details.no_of_stages);
          if (res.data.details.stage_one) {
            setStageOne(res.data.details.stage_one);
          }
          if (res.data.details.stage_two) {
            setStageTwo(res.data.details.stage_two);
          }
          if (res.data.details.stage_three) {
            setStageThree(res.data.details.stage_three);
          }
          if (res.data.details.stage_four) {
            setStageFour(res.data.details.stage_four);
          }
        });
    }

    async function buildingDetails() {
      console.log(loginId);
      axios
        .post(
          `https://arclif-services-backend.uc.r.appspot.com/getbuildingdetails`,
          {
            id: loginId,
          }
        )
        .then(function (res) {
          console.log(res.data.details[0]);
          setBuildingDetails(res.data.details[0]);
        });
    }

    userDetails();
    buildingDetails();
    userPlan();
  }, []);

  useEffect(() => {
    if (stageThree.length === 0) {
      document.getElementById("stage_threeContainer").style.display = "none";
      document.getElementById("stagePay_three").style.display = "none";
    } else {
      document.getElementById("stage_threeContainer").style.display = "block";
      document.getElementById("stagePay_three").style.display = "flex";
    }
    if (stageFour.length === 0) {
      document.getElementById("stage_fourContainer").style.display = "none";
      document.getElementById("stagePay_four").style.display = "none";
    } else {
      document.getElementById("stage_fourContainer").style.display = "block";
      document.getElementById("stagePay_four").style.display = "flex";
    }
  }, [stageThree, stageFour]);

  useEffect(() => {
    setTotalAmount(buildingDetails.total_area * plan.plan_amount);
  }, [buildingDetails, plan]);

  const handlePaymentFinal = useCallback(() => {
    const options = {
      key: "rzp_live_N1mEU44ddNNCyY",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Agiha Payment",
      description: "",
      image: "/agrihaLogo.png",
      order_id: orderid,
      callback_url: `https://arclif-service-payment.herokuapp.com/verifyPayment/${id}`,
      redirect: true,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: `${name}`,
        email: `${email}`,
        contact: `${mobile}`,
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
  }, [Razorpay, name, email, mobile, orderid, id, totalAmount]);

  const handlePaymentStages = useCallback(
    (a) => {
      const options = {
        key: "rzp_live_N1mEU44ddNNCyY",
        amount: a * 100,
        currency: "INR",
        name: "Agiha Payment",
        description: "",
        image: "/agrihaLogo.png",
        order_id: orderid,
        callback_url: `https://arclif-services-backend.uc.r.appspot.com/verifyPayment/${id}`,
        redirect: true,
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: `${name}`,
          email: `${email}`,
          contact: `${mobile}`,
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
    },
    [Razorpay, name, email, mobile, orderid, id]
  );

  async function paymnetOrderStages(planName, stageName, value) {
    console.log(stageName);
    console.log(value);
    console.log(planName);
    console.log(id);
    axios
      .post(`https://arclif-services-backend.uc.r.appspot.com/paymentOrder`, {
        amount: value,
        userId: id,
        planname: planName,
        stage: stageName,
        paymentmode: "stage",
      })
      .then(function (res) {
        console.log(res.data);
        setAmount(res.data.order.amount_due);
        setOrderid(res.data.order.id);
        if (res.data.status === 200) {
          handlePaymentStages(value);
        }
      });
  }

  async function paymnetOrderFinal() {
    axios
      .post(`https://arclif-services-backend.uc.r.appspot.com/paymentOrder`, {
        amount: totalAmount,
        userId: id,
        paymentmode: "finalpayment",
      })
      .then(function (res) {
        console.log(res.data);
        setAmount(res.data.order.amount_due);
        setOrderid(res.data.order.id);
        if (res.data.status === 200) {
          handlePaymentFinal();
        }
      });
  }

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <h3>Stage Payments</h3>
        <div className={styles.containers__stagePayments}>
          <div className={styles.stagePaymentsContainer}>
            <div
              onClick={() =>
                paymnetOrderStages(
                  plan.plan_name,
                  "stage_one",
                  (totalAmount * plan.stage_one_price) / 100
                )
              }
              className={styles.stagePayment}
            >
              <h4>Stage 1</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>
                  {(totalAmount * plan.stage_one_price) / 100}
                  .00
                </h5>
                <div className={styles.completed__button}>Completed</div>
                <div className={styles.payAmount__button}>PAY NOW</div>
              </div>
            </div>
            <div
              onClick={() =>
                paymnetOrderStages(
                  plan.plan_name,
                  "stage_two",
                  (totalAmount * plan.stage_two_price) / 100
                )
              }
              className={styles.stagePayment}
            >
              <h4>Stage 2</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>{(totalAmount * plan.stage_two_price) / 100}.00</h5>
                <div className={styles.completed__button}>Completed</div>
                <div className={styles.payAmount__button}>PAY NOW</div>
              </div>
            </div>
            <div
              onClick={() =>
                paymnetOrderStages(
                  plan.plan_name,
                  "stage_three",
                  (totalAmount * plan.stage_three_price) / 100
                )
              }
              id="stage_threeContainer"
              className={styles.stagePayment}
            >
              <h4>Stage 3</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>{(totalAmount * plan.stage_three_price) / 100}.00</h5>
                <div className={styles.completed__button}>Completed</div>
                <div className={styles.payAmount__button}>PAY NOW</div>
              </div>
            </div>
            <div
              onClick={() =>
                paymnetOrderStages(
                  plan.plan_name,
                  "stage_four",
                  (totalAmount * plan.stage_four_price) / 100
                )
              }
              id="stage_fourContainer"
              className={styles.stagePayment}
            >
              <h4>Stage 4</h4>
              <div className={styles.row_stage_payment}>
                <p>Amount</p>
                <h5>{(totalAmount * plan.stage_four_price) / 100}.00</h5>
                <div className={styles.completed__button}>Completed</div>
                <div className={styles.payAmount__button}>PAY NOW</div>
              </div>
            </div>
          </div>
          <div className={styles.payAtOneTimeContainer}>
            <h4>Pay Complete Amount</h4>
            <div className={styles.payAtOneTime}>
              <p>Stage 1</p>
              <p>
                {(totalAmount * plan.stage_one_price) / 100}
                .00
              </p>
            </div>
            <div className={styles.payAtOneTime}>
              <p>Stage 2</p>
              <p>{(totalAmount * plan.stage_two_price) / 100}.00</p>
            </div>
            <div id="stagePay_three" className={styles.payAtOneTime}>
              <p>Stage 3</p>
              <p>{(totalAmount * plan.stage_three_price) / 100}.00</p>
            </div>
            <div id="stagePay_four" className={styles.payAtOneTime}>
              <p>Stage 4</p>
              <p>{(totalAmount * plan.stage_four_price) / 100}.00</p>
            </div>
            <div className={styles.payAtOneTime__bottom}>
              <div className={styles.payAtOneTime}>
                <h5>Total Amount</h5>
                <h3>{totalAmount}.00</h3>
              </div>
            </div>
            <div onClick={paymnetOrderFinal} className={styles.payAllButton}>
              MAKE PAYMENT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StagePayments;
