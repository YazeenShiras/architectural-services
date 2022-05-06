import React, { useState, useEffect } from "react";
import styles from "../styles/BodyDetails.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import { PulseLoader } from "react-spinners";
import axios from "axios";

const BodyDetails = () => {
  const [number, setNumber] = useState("");

  const [loginId, setLoginId] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [home, setHome] = useState("");
  const [place, setPlace] = useState("");
  const [pincode, setPincode] = useState("");

  const [country, setCountry] = useState("");
  const [longitute, setLongitute] = useState("");
  const [latitude, setLatitude] = useState("");

  const [proffession, setProffession] = useState("");
  const [members, setMembers] = useState("");
  const [seniorCitizen, setSeniourCitizen] = useState(true);

  useEffect(() => {
    const logId = localStorage.getItem("loginId");
    setLoginId(logId);
    const newmob = localStorage.getItem("phone");
    setNumber(newmob);
  }, []);

  const storeValues = () => {
    setName(document.getElementById("name").value);
    setEmail(document.getElementById("email").value);
    setHome(document.getElementById("homeName").value);
    setProffession(document.getElementById("profession").value);
    setMembers(document.getElementById("members").value);
  };

  const storePlace = () => {
    setPlace(document.getElementById("place").value);
  };

  const storeIsSenoirCitizenValue = () => {
    setSeniourCitizen(true);
  };

  const storeIsNotSenoirCitizenValue = () => {
    setSeniourCitizen(false);
  };

  useEffect(() => {
    async function getLocationDetails() {
      console.log("access to getAllProducts");
      const endpoint = `https://api.geoapify.com/v1/geocode/autocomplete?text=${place}%20&format=json&apiKey=41ff15ef6d914c4aa4d53d1c7c848744`;

      await axios
        .get(endpoint)
        .then((res) => {
          const data = res.data;
          console.log(data);
          if (data.results) {
            setCountry(data.results[0].country);
            setLatitude(data.results[0].lat);
            setLongitute(data.results[0].lon);
            setPincode(data.results[0].postcode);
          }
        })
        .catch(console.error);
    }

    if (place.length > 2) {
      getLocationDetails();
    }
  }, [place]);

  async function createUser() {
    document.getElementById("loaderSubmit").style.display = "block";
    document.getElementById("submitText").style.display = "none";

    const res = await fetch(
      "https://arclif-services-backend.uc.r.appspot.com/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login_id: loginId,
          uname: name,
          email: email,
          housename: home,
          Place: place,
          Pincode: pincode,
          country: country,
          longitute: longitute,
          latitude: latitude,
          Profession: proffession,
          Nooffamilymembers: members,
          Seniorcitizen: seniorCitizen,
        }),
      }
    );
    const data = await res.json();
    console.log(data);
    if (data.msg === "userdetails added !!") {
      window.location.href = "/budget";
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
                  <input onChange={storePlace} id="place" type="text" />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Pincode*</legend>
                <div className={styles.input__box}>
                  <input
                    value={pincode}
                    maxLength={6}
                    id="pincode"
                    type="text"
                  />
                </div>
              </fieldset>
              <fieldset className={styles.input__container}>
                <legend>Country*</legend>
                <div className={styles.input__box}>
                  <input value={country} id="country" type="text" />
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
