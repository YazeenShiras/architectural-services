/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../styles/Profile.module.css";
import Header from "../components/Header";

const ProfileDetails = () => {
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
                  <input id="name" type="text" name="username" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Mobile Number</legend>
                <div className={styles.input__box__form__update}>
                  <input id="moble" type="text" name="mobile" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Email</legend>
                <div className={styles.input__box__form__update}>
                  <input id="email" type="email" name="email" />
                </div>
              </fieldset>
              <fieldset
                className={styles.input__container__form__update__textare}
              >
                <legend>Bio</legend>
                <div className={styles.input__box__form__update__textArea}>
                  <textarea name="bio" id="bio" maxLength="250"></textarea>
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Home Name</legend>
                <div className={styles.input__box__form__update}>
                  <input id="homeName" type="text" name="homeName" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Place</legend>
                <div className={styles.input__box__form__update}>
                  <input id="place" type="text" name="place" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Pincode</legend>
                <div className={styles.input__box__form__update}>
                  <input id="pincode" type="text" name="pincode" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Country</legend>
                <div className={styles.input__box__form__update}>
                  <input id="country" type="text" name="country" readOnly />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>State</legend>
                <div className={styles.input__box__form__update}>
                  <input id="state" type="text" name="state" readOnly />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>Profession</legend>
                <div className={styles.input__box__form__update}>
                  <input id="profession" type="text" name="profession" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container__form__update}>
                <legend>No.of Family Members</legend>
                <div className={styles.input__box__form__update}>
                  <input id="members" type="text" name="members" />
                </div>
              </fieldset>
              <div className={styles.citizenType__container}>
                <p>Senior Citizen?</p>
                <input
                  className={styles.regular__checkbox}
                  type="radio"
                  name="seniorCitizen"
                  id="seniorCitizenYes"
                />
                <label htmlFor="seniorCitizenYes">Yes</label>
                <input
                  className={styles.regular__checkbox}
                  type="radio"
                  name="seniorCitizen"
                  id="seniorCitizenNo"
                />
                <label htmlFor="seniorCitizenNo">No</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
