import React, { useState, useEffect } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";

const BodySendOtp = () => {
  const [number, setNumber] = useState("");
  const [isdetails, setIsdetails] = useState(false);

  async function handleSubmit() {
    document.getElementById("loaderSentOtpRegister").style.display = "block";
    document.getElementById("sentOTPRegister").style.display = "none";

    await fetch("https://agriha-services.uc.r.appspot.com/sendOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phonenumber: number,
        flag: "register",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("phone", data.phone);
        localStorage.setItem("hash", data.hash);
        if (data.flag === "") {
          handleSubmit();
        }
        if (data.flag === "login") {
          document.getElementById("errorMobile").style.display = "block";
          document.getElementById("errorMobile").style.color = "#ff0800";
          document.getElementById("loaderSentOtpRegister").style.display =
            "none";
          document.getElementById("sentOTPRegister").style.display = "block";
        }
        if (data.status === "200" && data.flag !== "login") {
          window.location.href = "/verifyotp";
        }
      });
  }

  useEffect(() => {
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
    } else {
      setIsdetails(false);
    }
  }, [number]);

  const storeValues = () => {
    setNumber(document.getElementById("number").value);
  };

  const sendOTPClick = () => {
    if (number === "") {
      document.getElementById("errorMobile").style.display = "block";
    } else {
      let isnum = /^\d+$/.test(number);
      if (number.length == 10) {
        if (isnum) {
          document.getElementById("errorMobile").style.display = "none";
        } else {
          document.getElementById("errorMobile").style.display = "block";
          document.getElementById("errorMobile").innerHTML =
            "Enter valid Mobile Number";
        }
      } else {
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML =
          "Enter valid Mobile Number";
      }
      if (isdetails) {
        handleSubmit();
      }
    }
  };

  useEffect(() => {
    var input = document.getElementById("number");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitButton").click();
      }
    });
  }, []);

  return (
    <div
      className={registerstyles.bodyRegister}
      style={{ backgroundImage: `url('/registerBg.png')` }}
    >
      <div className={registerstyles.header__bodyRegister}>
        <div className={styles.header__left}>
          <Image
            className={styles.header__logo}
            src="/agrihaLogo.svg"
            alt="agriha Logo"
            width={120}
            height={100}
          />
        </div>
        <div className={styles.header__right}>
          <Link href="/login" passHref>
            <p className={styles.loginButton__header}>LOGIN</p>
          </Link>
        </div>
      </div>
      <div className={registerstyles.content__bodyRegister}>
        <div className={registerstyles.image__container__bodyRegister}>
          <Image
            priority={Image}
            src="/register.svg"
            alt=""
            width={300}
            height={350}
          />
        </div>
        <div className={registerstyles.inputs__container__bodyRegister}>
          <h2>Register</h2>
          <p>Enter your Mobile Number</p>
          <form autoComplete="off" className={registerstyles.form}>
            <fieldset className={registerstyles.input__container}>
              <legend>Mobile Number*</legend>
              <div className={registerstyles.input__box}>
                <input type="tel" onChange={storeValues} id="number" />
              </div>
            </fieldset>
            <p className={registerstyles.errorText} id="errorMobile">
              Mobile number already registered.
            </p>
            <div
              id="submitButton"
              onClick={sendOTPClick}
              className={registerstyles.register__button__form}
            >
              <div
                className={registerstyles.loader__container__register}
                id="loaderSentOtpRegister"
              >
                <PulseLoader color="#ffffff" />
              </div>
              <p id="sentOTPRegister">SEND OTP</p>
            </div>
          </form>
          <div className={registerstyles.alreadyRegistered__container}>
            <p className={registerstyles.alreadyRegisterd}>
              already registered ?{" "}
            </p>
            <Link href="/login" passHref>
              <p className={registerstyles.login__AlreadyRegisterd}>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySendOtp;
