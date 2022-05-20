import React, { useEffect, useState } from "react";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import axios from "axios";
import Link from "next/link";

const PlanDetailsProfile = () => {
  const [id, setId] = useState("");
  const [plan, setPlan] = useState([]);
  const [planServices, setPlanServices] = useState([]);

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
          `https://arclif-services-backend.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          console.log(res.data);
          console.log(res.data);
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
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

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.planContainerProfile}>
          <div className={styles.title_planContainer}>
            <h5>Hi {name}</h5>
            <p>
              You have choosen {plan.plan_name} PLAN for your home construction,
              your plan includes below features.
            </p>
          </div>
          <div className={styles.content_planContainer}>
            <div className={styles.left_content_planContainer}>
              <h4>Plan Features</h4>
              <div className={styles.features_left_content_planContainer}>
                {planServices.map((plans, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.feature_left_content_planContainer}
                    >
                      <Image
                        src="/check.svg"
                        alt=""
                        width={12}
                        height={12}
                      ></Image>
                      <p>{plans}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.right_content_planContainer}>
              <div className={styles.row_right_content_planContainer}>
                <p>Plan Name</p>
                <h6>{plan.plan_name}</h6>
              </div>
              <div className={styles.row_right_content_planContainer}>
                <p>Total Area</p>
                <h6>{buildingDetails.total_area} sq.ft</h6>
              </div>
              <div className={styles.row_right_content_planContainer}>
                <p>Amount per sq.ft</p>
                <h6>{plan.plan_amount} Rs.</h6>
              </div>
              <div className={styles.row_right_content_planContainer}>
                <p>Total Amount</p>
                <h6>{buildingDetails.total_area * plan.plan_amount} Rs.</h6>
              </div>
              <div className={styles.row_right_content_planContainer}>
                <p>Amount Payed</p>
                <h6>{plan.initial_payment} Rs.</h6>
              </div>
              <div className={styles.row_right_content_planContainer}>
                <p>Due Paymnet</p>
                <h6>
                  {buildingDetails.total_area * plan.plan_amount -
                    plan.initial_payment}{" "}
                  Rs.
                </h6>
              </div>
            </div>
          </div>
          <div className={styles.button_container_profile_plan}>
            <div className={styles.left_button_container_profile_plan}>
              <Image src="/info.svg" alt="" width={20} height={20}></Image>
              <p>
                You have to pay Down payment for unlock our services, pay total
                amount after registration complete.
              </p>
            </div>
            <Link href="/purchaseDetails" passHref>
              <div className={styles.right_button_container_profile_plan}>
                CONTINUE
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsProfile;
