import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { PulseLoader } from "react-spinners";
import addToken from "../src/action";
import axios from "axios";

axios.defaults.withCredentials = true;

const BodyVerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [isotp, setIsotp] = useState(false);
  const [token, setToken] = useState("");

  const states = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(states);

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

    await fetch("https://agriha-services.uc.r.appspot.com/verifyOTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phonenumber: localStorage.getItem("phone"),
        roletype: "User",
        hash: localStorage.getItem("hash"),
        otp: otp,
        msg: "null",
        withCredentials: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(addToken(data.accessToken, data.refreshToken));
        document.cookie = `accessToken=${
          data.accessToken
        } ; expires = ${new Date(new Date().getTime() + 30 * 60 * 1000)}`;

        if (data.msg === "register verified") {
          localStorage.setItem("loginId", data.data[0].data._id);
          window.location.href = "/detailsform";
        }
        if (data.msg === "login verified") {
          localStorage.setItem("loginId", data.data[0].data[0]._id);
          window.location.href = "/profile";
        }
        if (data.msg === "Incorrect OTP") {
          document.getElementById("loaderSentOtpRegister").style.display =
            "none";
          document.getElementById("sentOTPRegister").style.display = "block";
          document.getElementById("errorVarifyOtp").style.display = "block";
          document.getElementById("errorVarifyOtp").style.color = "red";
          document.getElementById("errorVarifyOtp").innerHTML = "invalid OTP";
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

  useEffect(() => {
    var input = document.getElementById("otp");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("verifyOTPButton").click();
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
              id="verifyOTPButton"
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
