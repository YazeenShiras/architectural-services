import React, { useEffect, useState, useContext } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import axios from "axios";

const BodyVerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [isotp, setIsotp] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    window.onbeforeunload = function (e) {
      window.onunload = function () {
        window.localStorage.isMySessionActive = "false";
      };
      return undefined;
    };
    window.onload = function () {
      window.localStorage.isMySessionActive = "true";
    };
    var tokenOTP = localStorage.getItem("tokenOTP");
    setToken(tokenOTP);
  }, []);

  async function handleSubmit() {
    document.getElementById("loaderSentOtpRegister").style.display = "block";
    document.getElementById("sentOTPRegister").style.display = "none";

    axios
      .post("https://agriha-services.uc.r.appspot.com/verifyOTP", {
        phonenumber: localStorage.getItem("phone"),
        roletype: "User",
        hash: localStorage.getItem("hash"),
        otp: otp,
        msg: "null",
        withCredentials: true,
      })
      .then(function (res) {
        if (res.data.msg === "register verified") {
          localStorage.setItem("loginId", res.data.data[0].data._id);
          window.location.href = "/detailsform";
        }
        if (res.data.msg === "login verified") {
          localStorage.setItem("loginId", res.data.data[0].data[0]._id);
          window.location.href = "/profile";
        }
      });
  }

  const storeOtp = () => {
    setOtp(document.getElementById("otp").value);
  };

  useEffect(() => {
    if (otp !== "") {
      let isnum = /^\d+$/.test(otp);
      if (otp.length == 6) {
        if (isnum) {
          setIsotp(true);
        } else {
          setIsotp(false);
        }
      } else {
        setIsotp(false);
      }
    }
  }, [otp]);

  const verifyClick = () => {
    let isnum = /^\d+$/.test(otp);
    if (otp === "") {
      document.getElementById("errorVarifyOtp").style.display = "block";
    } else if (otp.length != 6) {
      document.getElementById("errorVarifyOtp").innerHTML = "Invalid OTP";
      document.getElementById("errorVarifyOtp").style.display = "block";
    } else if (!isnum) {
      document.getElementById("errorVarifyOtp").innerHTML = "Invalid OTP";
      document.getElementById("errorVarifyOtp").style.display = "block";
    } else {
      if (isotp) {
        handleSubmit();
      }
    }
  };

  return (
    <div
      className={registerstyles.bodyRegister}
      style={{ backgroundImage: `url('/registerBg.png')` }}
    >
      <div className={registerstyles.header__bodyRegister}>
        <div className={styles.header__left}>
          <Image
            className={styles.header__logo}
            src="/arclifLogo.png"
            alt="Arclif Logo"
            width={100}
            height={35}
          />
          <div className={styles.header__logo_one}>
            <Image src="/one.png" alt="" width={2} height={25} />
          </div>
          <Image
            className={styles.header__logo}
            src="/agrihaLogo.png"
            alt="agriha Logo"
            width={110}
            height={90}
          />
        </div>
        <div className={styles.header__right}>
          {/* <Link href="/sendotp" passHref>
            <p className={styles.registerButton__header}>Register Now</p>
          </Link>
          <Link href="/login" passHref>
            <p className={styles.loginButton__header}>LOGIN</p>
          </Link>
          <div className={styles.header__menu__container}>
            <Image
              className={styles.header__menu}
              src="/menuIcon.svg"
              alt=""
              width={30}
              height={20}
            />
          </div> */}
        </div>
      </div>
      <div className={registerstyles.content__bodyRegister}>
        <div className={registerstyles.image__container__bodyRegister}>
          <Image src="/register.svg" alt="" width={300} height={350} />
        </div>
        <div className={registerstyles.inputs__container__bodyRegister}>
          <h2>Verify OTP</h2>
          {/* <p>Enter OTP from mobile number</p> */}
          <form className={registerstyles.form} action="">
            <fieldset className={registerstyles.input__container}>
              <legend>Enter OTP</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeOtp} id="otp" type="tel" />
              </div>
            </fieldset>
            <p id="errorVarifyOtp" className={registerstyles.error__varifyOtp}>
              Please enter OTP
            </p>
            <div
              onClick={verifyClick}
              className={registerstyles.register__button__form}
            >
              <div
                className={registerstyles.loader__container__register}
                id="loaderSentOtpRegister"
              >
                <PulseLoader color="#ffffff" />
              </div>
              <p id="sentOTPRegister">VERIFY & REGISTER</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyVerifyOtp;
