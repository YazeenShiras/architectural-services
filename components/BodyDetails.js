import React, { useState, useEffect } from "react";
import styles from "../styles/BodyDetails.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import { PulseLoader } from "react-spinners";

const BodyDetails = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [home, setHome] = useState("");
  const [place, setPlace] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [proffession, setProffession] = useState("");
  const [members, setMembers] = useState("");
  const [seniorCitizen, setSeniourCitizen] = useState(true);

  const [userId, setUserId] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    let localNumber = localStorage.getItem("newmob");
    setNumber(localNumber);
  }, []);

  const storeValues = () => {
    setName(document.getElementById("name").value);
    setEmail(document.getElementById("email").value);
    setHome(document.getElementById("homeName").value);
    setPlace(document.getElementById("place").value);
    setPincode(document.getElementById("pincode").value);
    setCountry(document.getElementById("country").value);
    setProffession(document.getElementById("profession").value);
    setMembers(document.getElementById("members").value);
  };

  const storeIsSenoirCitizenValue = () => {
    setSeniourCitizen(true);
  };

  const storeIsNotSenoirCitizenValue = () => {
    setSeniourCitizen(false);
  };

  async function userDetails() {
    const res = await fetch("https://aclifinc.herokuapp.com/cleint_details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer${accessToken}`,
      },
      body: JSON.stringify({
        house_name: home,
        city: country,
        state: place,
        pin_number: pincode,
        profession: proffession,
        family_members: members,
        sinior_citzen: seniorCitizen,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      window.location.href = "/budget";
    }
  }

  async function createUser() {
    const res = await fetch("https://aclifinc.herokuapp.com/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mobile_number: number,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "true") {
      setUserId(data.id);
      setAccessToken(data.access_token);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      if (userId !== "") {
        userDetails();
      }
    }
  }

  const submitClick = () => {
    if (
      name === "" ||
      email === "" ||
      home === "" ||
      place === "" ||
      pincode === "" ||
      country === "" ||
      proffession === "" ||
      members === ""
    ) {
      document.getElementById("errorDetails").style.display = "block";
      document.getElementById("errorDetails").innerHTML = "Must fill *Required";
    } else {
      document.getElementById("errorDetails").style.display = "none";
      if (email !== "") {
        let isatemail = email.includes("@");
        let iscomemail = email.includes(".com");
        if (isatemail && iscomemail) {
          document.getElementById("errorDetails").style.display = "none";
          if (pincode !== "") {
            let ispin = /^\d+$/.test(pincode);
            if (ispin) {
              document.getElementById("errorDetails").style.display = "none";
              if (members !== "") {
                let isnum = /^\d+$/.test(members);
                if (isnum) {
                  document.getElementById("errorDetails").style.display =
                    "none";
                  createUser();
                } else {
                  document.getElementById("errorDetails").style.display =
                    "block";
                  document.getElementById("errorDetails").innerHTML =
                    "Family Members must be number";
                }
              }
            } else {
              document.getElementById("errorDetails").style.display = "block";
              document.getElementById("errorDetails").innerHTML =
                "invalid Pincode";
            }
          }
        } else {
          document.getElementById("errorDetails").style.display = "block";
          document.getElementById("errorDetails").innerHTML = "invalid Email";
        }
      }
    }
  };

  return (
    <div className={styles.bodyDetails}>
      <Header />
      <div className={styles.bodyDetails__container}>
        <div
          id="imageMain"
          className={styles.bodyDetails__image}
          style={{
            backgroundImage: `url('/formPage.png')`,
          }}
        ></div>
        <div className={styles.bodyDetails__content}>
          <div className={styles.form__container}>
            <h3>
              Please complete your details <br /> to get a proper assistance!
            </h3>
            <form autoComplete="off" className={styles.form} action="">
              <fieldset className={styles.input__container}>
                <legend>Mobile Number</legend>
                <div className={styles.input__box}>
                  <input value={number} readOnly id="number" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Name*</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="name" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Email*</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="email" type="email" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>House Name*</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="homeName" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Place*</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="place" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Pincode*</legend>
                <div className={styles.input__box}>
                  <input
                    maxLength={6}
                    onChange={storeValues}
                    id="pincode"
                    type="text"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Country*</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="country" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Profession*</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="profession" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>No.of Family Members*</legend>
                <div className={styles.input__box}>
                  <input
                    maxLength={2}
                    onChange={storeValues}
                    id="members"
                    type="text"
                  />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorDetails">
                Must fill *Required
              </p>
              <div className={styles.citizenType__container}>
                <p>Senior Citizen?</p>
                <input
                  onClick={storeIsSenoirCitizenValue}
                  className={styles.regular__checkbox}
                  type="radio"
                  name="seniorCitizen"
                  id="seniorCitizenYes"
                />
                <label htmlFor="seniorCitizenYes">Yes</label>
                <input
                  onClick={storeIsNotSenoirCitizenValue}
                  className={styles.regular__checkbox}
                  type="radio"
                  name="seniorCitizen"
                  id="seniorCitizenNo"
                />
                <label htmlFor="seniorCitizenNo">No</label>
              </div>
              <div
                onClick={submitClick}
                className={styles.submit__button__form}
              >
                <div
                  className={styles.loader__container__submit}
                  id="loaderSubmit"
                >
                  <PulseLoader color="#ffffff" />
                </div>
                <p id="submitText">SUBMIT</p>
              </div>
            </form>
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

export default BodyDetails;
