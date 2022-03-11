import React, { useEffect, useState, useContext } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { LoginContext } from "../context/LoginNumberContext";

const BodyVerifyOtpLogin = () => {
  const [otp, setOtp] = useState("");
  const [isotp, setIsotp] = useState(false);
  const [mob, setMob] = useState("");

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
    var mob = localStorage.getItem("mob");
    setMob(mob);
  }, []);

  async function handleSubmit() {
    let url = new URL("https://arclifs.herokuapp.com/otp_verification");
    url.search = new URLSearchParams({
      mobile: mob,
      otp: otp,
    });
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 202) {
      localStorage.removeItem("mob");
      window.location.href = "/detailsform";
    } else if (data.status === 404) {
      document.getElementById("errorVarifyOtp").innerHTML = data.message;
      document.getElementById("errorVarifyOtp").style.display = "block";
      console.log(otp);
      console.log(detailsform);
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
              VERIFY & LOGIN
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodyVerifyOtpLogin;
