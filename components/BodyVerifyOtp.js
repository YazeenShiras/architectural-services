import React, { useEffect, useState } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const BodyVerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [isotp, setIsotp] = useState(false);

  const storeOtp = () => {
    setOtp(document.getElementById("otp").value);
  };

  useEffect(() => {
    if (otp !== "") {
      let isnum = /^\d+$/.test(otp);
      if (otp.length == 5) {
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

  const errorShow = () => {
    let isnum = /^\d+$/.test(otp);
    if (otp === "") {
      document.getElementById("errorVarifyOtp").style.display = "block";
    } else if (otp.length != 5) {
      document.getElementById("errorVarifyOtp").innerHTML =
        "Enter a 5 digit OTP";
      document.getElementById("errorVarifyOtp").style.display = "block";
    } else if (!isnum) {
      document.getElementById("errorVarifyOtp").innerHTML = "Enter a valid OTP";
      document.getElementById("errorVarifyOtp").style.display = "block";
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
          <Link href="register" passHref>
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
            <Link
              href={isotp === true ? "/detailsform" : "/verifyotp"}
              passHref
            >
              <div
                onClick={errorShow}
                className={registerstyles.register__button__form}
              >
                VERIFY
              </div>
            </Link>
          </form>
          {/*  <Link href="/login" passHref>
            <p
              style={{
                fontSize: "12px",
                marginTop: "20px",
                color: "#5b5b5b",
                cursor: "pointer",
              }}
            >
              Change Mobile Number
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BodyVerifyOtp;
