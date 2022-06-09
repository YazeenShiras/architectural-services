import React, { useEffect, useState } from "react";
import HeaderLogin from "./HeaderLogin";
import styles from "../styles/PurchaseDetails.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const PurchaseDetails = () => {
  var authenticated = true;

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    authenticated = true;
  }
  if (!accessToken) {
    authenticated = false;
    window.location.href = "/login";
  }

  const [id, setId] = useState("");

  const [plan, setPlan] = useState([]);
  const [planServices, setPlanServices] = useState([]);
  const [noOfStages, setNoOfStages] = useState("");
  const [stageOne, setStageOne] = useState([]);
  const [stageTwo, setStageTwo] = useState([]);
  const [stageThree, setStageThree] = useState([]);
  const [stageFour, setStageFour] = useState([]);

  const [steps, setSteps] = useState(["Stage 1", "Stage 2"]);

  const [buildingDetails, setBuildingDetails] = useState([]);

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);

    async function userDetails() {
      axios
        .get(
          `https://agriha-services.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
        });
    }

    async function userPlan() {
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getuserplan`, {
          login_id: loginId,
        })
        .then(function (res) {
          setPlan(res.data.details);
          setNoOfStages(res.data.details.no_of_stages);
          setPlanServices(res.data.details.plan_services);
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
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getbuildingdetails`, {
          id: loginId,
        })
        .then(function (res) {
          setBuildingDetails(res.data.details[0]);
        });
    }

    userDetails();
    userPlan();
    buildingDetails();
  }, []);

  useEffect(() => {
    if (stageThree.length === 0) {
      document.getElementById("stageThree").style.display = "none";
      document.getElementById("progressThree").style.display = "none";
      document.getElementById("lenearThree").style.display = "none";
    } else {
      document.getElementById("stageThree").style.display = "block";
      document.getElementById("progressThree").style.display = "flex";
      document.getElementById("lenearThree").style.display = "block";
      setSteps(["Stage 1", "Stage 2", "Stage 3"]);
    }
    if (stageFour.length === 0) {
      document.getElementById("stageFour").style.display = "none";
      document.getElementById("progressFour").style.display = "none";
      document.getElementById("lenearFour").style.display = "none";
    } else {
      document.getElementById("stageFour").style.display = "block";
      document.getElementById("progressFour").style.display = "flex";
      document.getElementById("lenearFour").style.display = "block";
      setSteps(["Stage 1", "Stage 2", "Stage 3", "Stage 4"]);
    }
  }, [stageThree, stageFour]);

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.paymentStatus__container}>
          <h3>Payment Status</h3>
          <div className={styles.progressBar__paymentStatus__container}>
            <div className={styles.stage_progress}>
              <div className={styles.circle_progress}>1</div>
              <h5>Stage 1</h5>
            </div>
            <div className={styles.linear_progress}></div>
            <div className={styles.stage_progress}>
              <div className={styles.circle_progress}>2</div>
              <h5>Stage 2</h5>
            </div>
            <div id="lenearThree" className={styles.linear_progress}></div>
            <div id="progressThree" className={styles.stage_progress}>
              <div className={styles.circle_progress}>3</div>
              <h5>Stage 3</h5>
            </div>
            <div id="lenearFour" className={styles.linear_progress}></div>
            <div id="progressFour" className={styles.stage_progress}>
              <div className={styles.circle_progress}>4</div>
              <h5>Stage 4</h5>
            </div>
          </div>
        </div>
        <div className={styles.stageDetails__container}>
          <h3>Stage Details</h3>
          <div className={styles.Card__stageDetails__container}>
            <div className={styles.stageContainer}>
              <h4>Stage 1</h4>
              {stageOne.map((features, index) => {
                return (
                  <div key={index} className={styles.features__stageContainer}>
                    <Image
                      src="/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{features}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.stageContainer}>
              <h4>Stage 2</h4>
              {stageTwo.map((features, index) => {
                return (
                  <div key={index} className={styles.features__stageContainer}>
                    <Image
                      src="/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{features}</p>
                  </div>
                );
              })}
            </div>
            <div id="stageThree" className={styles.stageContainer}>
              <h4>Stage 3</h4>
              {stageThree.map((features, index) => {
                return (
                  <div key={index} className={styles.features__stageContainer}>
                    <Image
                      src="/check.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>{features}</p>
                  </div>
                );
              })}
            </div>
            <div id="stageFour" className={styles.stageContainer}>
              <h4>Stage 4</h4>
              <div className={styles.features__stageContainer}>
                <Image src="/check.svg" alt="" width={12} height={12}></Image>
                <p>Floor Plan</p>
              </div>
              <div className={styles.features__stageContainer}>
                <Image src="/check.svg" alt="" width={12} height={12}></Image>
                <p>Door and Windows positioning </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.purchaseDetailsSection__container}>
          <h3>Purchase History</h3>
          <div className={styles.paymentDetails__container}>
            <h4>Payment Details</h4>
            <div className={styles.row__paymentDetails__container}>
              <h5>Total amount</h5>
              <p>{buildingDetails.total_area * plan.plan_amount}.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Paid amount</h5>
              <p>{plan.initial_payment}.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Due amount</h5>
              <p>
                {buildingDetails.total_area * plan.plan_amount -
                  plan.initial_payment}
                .00
              </p>
            </div>
            {/* <h4>Completed Stages</h4>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 1</h5>
              <p>100000.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 2</h5>
              <p>100000.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 3</h5>
              <p>100000.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 4</h5>
              <p>100000.00</p>
            </div>
            <h4>Due Stages</h4>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 1</h5>
              <p>100000.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 2</h5>
              <p>100000.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 3</h5>
              <p>100000.00</p>
            </div>
            <div className={styles.row__paymentDetails__container}>
              <h5>Stage 4</h5>
              <p>100000.00</p>
            </div> */}
          </div>
          <div className={styles.paymnetCard__container}>
            <p>
              You are choosed{" "}
              <span className={styles.planName}>{plan.plan_name}</span> plan,
              you need to complete payment for unlock Documents.
            </p>
            <Link href="/drive" passHref>
              <div className={styles.paymentButton}>Unlock Documents</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
