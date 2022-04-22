import React, { useEffect, useState, useContext } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

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

    let url = new URL("https://aclifinc.herokuapp.com/otp_verification");
    url.search = new URLSearchParams({
      otp: otp,
    });
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        refresh_token: token,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 200) {
      window.location.href = "/detailsform";
    } else if (data.message === "Invalid OTP or Expire OTP") {
      document.getElementById("loaderSentOtpRegister").style.display = "none";
      document.getElementById("sentOTPRegister").style.display = "block";
      document.getElementById("errorVarifyOtp").innerHTML = "invalid OTP";
      document.getElementById("errorVarifyOtp").style.display = "block";
    } else if (data.message === "Invalid token or expired token") {
      document.getElementById("loaderSentOtpRegister").style.display = "none";
      document.getElementById("sentOTPRegister").style.display = "block";
      document.getElementById("errorVarifyOtp").innerHTML = "OTP expired";
      document.getElementById("errorVarifyOtp").style.display = "block";
    }
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
          <Link href="/" passHref>
            <Image
              className={styles.header__logo}
              src="/arclifLogo.svg"
              alt="Arclif Logo"
              width={100}
              height={35}
            />
          </Link>
        </div>
        <div className={styles.header__right}>
          <Link href="/sendotp" passHref>
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
          </div>
        </div>
      </div>
      <div className={registerstyles.content__bodyRegister}>
        <div className={registerstyles.image__container__bodyRegister}>
          <Image src="/register.svg" alt="" width={300} height={350} />
        </div>
        <div className={registerstyles.inputs__container__bodyRegister}>
          <h2>Verify OTP</h2>
          <form className={registerstyles.form} action="">
            <fieldset className={registerstyles.input__container}>
              <legend>Enter OTP</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeOtp} id="otp" type="text" />
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
