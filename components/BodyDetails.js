import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "../styles/BodyDetails.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import jwt from "jsonwebtoken";

const BodyDetails = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [proffession, setProffession] = useState("");
  const [members, setMembers] = useState(0);
  const [seniorCitizen, setSeniourCitizen] = useState(true);
  const [isdetails, setIsdetails] = useState(false);
  const [userId, setUserId] = useContext(UserContext);

  async function handleSubmit() {
    const res = await fetch("https://arclifs.herokuapp.com/cleint_details", {
      method: "POST",
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mobile_number: number,
        email: email,
        city: location,
        profession: proffession,
        family_members: members,
      }),
    });
    const json = await res.json();
    console.log(json);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        console.log("no user");
      } else {
        console.log("user available");
      }
    }
  });

  useEffect(() => {
    if (
      name !== "" &&
      number !== "" &&
      email !== "" &&
      location !== "" &&
      proffession !== "" &&
      members !== 0
    ) {
      if (number !== "") {
        let isnum = /^\d+$/.test(number);
        if (number.length == 10) {
          if (isnum) {
            setIsdetails(true);
          } else {
            setIsdetails(false);
          }
        } else {
          setIsdetails(false);
        }
      }
      if (email !== "") {
        let isatemail = email.includes("@");
        let iscomemail = email.includes(".com");
        if (isatemail && iscomemail) {
        } else {
          setIsdetails(false);
        }
      }
      if (members !== 0) {
        let isnumMembers = /^\d+$/.test(number);
        if (members.length <= 2) {
          if (isnumMembers) {
            setIsdetails(true);
          } else {
            setIsdetails(false);
          }
        } else {
          setIsdetails(false);
        }
      }
      if (seniorCitizen) {
        setIsdetails(true);
      } else {
        setIsdetails(true);
      }
      setIsdetails(true);
    } else {
      setIsdetails(false);
    }
  }, [name, number, email, location, proffession, members, seniorCitizen]);

  const storeValues = () => {
    setName(document.getElementById("name").value);
    setNumber(document.getElementById("number").value);
    setEmail(document.getElementById("email").value);
    setLocation(document.getElementById("location").value);
    setProffession(document.getElementById("profession").value);
    setMembers(parseInt(document.getElementById("members").value));
  };

  const storeIsSenoirCitizenValue = () => {
    setSeniourCitizen(true);
  };

  const storeIsNotSenoirCitizenValue = () => {
    setSeniourCitizen(false);
  };

  const registerClick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      location === "" ||
      proffession === "" ||
      members === 0
    ) {
      setIsdetails(false);
      document.getElementById("imageMain").style.height = "calc(110vh - 90px)";
      document.getElementById("errorMembers").style.display = "block";
      document.getElementById("errorMembers").innerHTML =
        "Must fill all fields";
    } else {
      document.getElementById("errorMembers").style.display = "none";
      let isatemail = email.includes("@");
      let iscomemail = email.includes(".com");
      if (isatemail && iscomemail) {
        document.getElementById("errorEmail").style.display = "none";
      } else {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("errorEmail").innerHTML = "Enter a valid Email";
      }
      let isnum = /^\d+$/.test(number);
      if (number.length == 10) {
        if (isnum) {
          document.getElementById("errorMobile").style.display = "none";
        } else {
          document.getElementById("imageMain").style.height =
            "calc(110vh - 90px)";
          document.getElementById("errorMobile").style.display = "block";
          document.getElementById("errorMobile").innerHTML =
            "Enter a valid Mobile Number";
        }
      } else {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML =
          "Enter a valid Mobile Number";
      }
      if (name === "") {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorName").style.display = "block";
        document.getElementById("errorName").innerHTML = "Name required";
      }
      if (number === "") {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML =
          "Mobile Number required";
      }
      if (email === "") {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("errorEmail").innerHTML = "Email required";
      }
      if (location === "") {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorLocation").style.display = "block";
        document.getElementById("errorLocation").innerHTML =
          "Location required";
      }
      if (proffession === "") {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorProffession").style.display = "block";
        document.getElementById("errorProffession").innerHTML =
          "Profession required";
      }
      let isnummember = /^\d+$/.test(members);
      if (members.length <= 2) {
        if (isnummember) {
          document.getElementById("errorMembers").style.display = "none";
        } else {
          document.getElementById("imageMain").style.height =
            "calc(110vh - 90px)";
          document.getElementById("errorMembers").style.display = "block";
          document.getElementById("errorMembers").innerHTML =
            "Enter a valid Number";
        }
      } else {
        document.getElementById("imageMain").style.height =
          "calc(110vh - 90px)";
        document.getElementById("errorMembers").style.display = "block";
        document.getElementById("errorMembers").innerHTML =
          "Enter a valid No.of Family Members";
      }
      if (isdetails) {
        handleSubmit;
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
                <legend>Name</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="name" type="text" />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorName">
                Enter a valid Name
              </p>
              <fieldset className={styles.input__container}>
                <legend>Mobile Number</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="number" type="text" />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorMobile">
                Enter a valid Mobile Number
              </p>
              <fieldset className={styles.input__container}>
                <legend>Email</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="email" type="email" />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorEmail">
                Enter a valid Email
              </p>
              <fieldset className={styles.input__container}>
                <legend>Location</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="location" type="text" />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorLocation">
                Enter a valid Location
              </p>
              <fieldset className={styles.input__container}>
                <legend>Profession</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="profession" type="text" />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorProffession">
                Enter a valid Mobile Number
              </p>
              <fieldset className={styles.input__container}>
                <legend>No.of Family Members</legend>
                <div className={styles.input__box}>
                  <input onChange={storeValues} id="members" type="text" />
                </div>
              </fieldset>
              <p className={styles.errorText} id="errorMembers">
                All fields Required
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
              <Link href={isdetails ? "/budget" : "/detailsform"} passHref>
                <div
                  onClick={registerClick}
                  className={styles.submit__button__form}
                >
                  SUBMIT
                </div>
              </Link>
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
