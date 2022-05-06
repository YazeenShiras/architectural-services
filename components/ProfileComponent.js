/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/Header";
import axios from "axios";

const ProfileDetails = () => {
  const [userdetails, setUserdetails] = useState([]);
  const [mob, setMob] = useState("");

  const [loginID, setLoginID] = useState("");

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setLoginID(loginId);
    console.log(loginId);

    async function handleSubmit() {
      axios
        .get(
          `https://arclif-services-backend.uc.r.appspot.com/viewsingleuser/${loginID}`
        )
        .then(function (res) {
          console.log(res.data);
          setUserdetails(res.data.details.userdetails[0]);
          console.log(res.data.details.userdetails[0]);
          setMob(res.data.details.logindetails[0].phonenumber);
        });
    }

    if (loginID !== "" && loginID !== undefined) {
      handleSubmit();
    }
  }, [loginID]);

  return (
    <div className={styles.ProfileDetails}>
      <Header />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.formContainer__settings}>
          <div className={styles.inputboxContainers__update}>
            <form autoComplete="off" className={styles.form__update}>
              <div className={styles.profileTitleContainer}>
                <h3>Profile Details</h3>
              </div>
              <fieldset className={styles.input__container__form__update}>
                <legend>Name</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.uname}
                    id="name"
                    type="text"
                    name="username"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Mobile Number</legend>
                <div className={styles.input__box__form__update}>
                  <input value={mob} id="moble" type="text" name="mobile" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Email</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.email}
                    id="email"
                    type="email"
                    name="email"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Home Name</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.housename}
                    id="homeName"
                    type="text"
                    name="homeName"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Place</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.Place}
                    id="place"
                    type="text"
                    name="place"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Pincode</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    id="pincode"
                    value={userdetails.Pincode}
                    type="text"
                    name="pincode"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Country</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.country}
                    id="country"
                    type="text"
                    name="country"
                    readOnly
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Profession</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.Profession}
                    id="profession"
                    type="text"
                    name="profession"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>No.of Family Members</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.Nooffamilymembers}
                    id="members"
                    type="text"
                    name="members"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Seniorcitizen ?</legend>
                <div className={styles.input__box__form__update}>
                  <input
                    value={userdetails.Seniorcitizen === true ? "Yes" : "No"}
                    id="members"
                    type="text"
                    name="members"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
