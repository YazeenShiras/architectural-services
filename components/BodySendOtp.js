import React, { useState, useEffect, useContext } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { MobileContext } from "../context/UserContext";

const BodySendOtp = () => {
  const [number, setNumber] = useState("");
  const [isdetails, setIsdetails] = useState(false);
  const [mobileForOTP, setMobileForOTP] = useContext(MobileContext);

  async function handleSubmit() {
    let url = new URL("https://arclifs.herokuapp.com/OTP_Genarator/singup");
    url.search = new URLSearchParams({
      mobile_num: number,
    });

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 200) {
      localStorage.setItem("mobile", data.mob);
      let mobile = localStorage.getItem("mobile");
      console.log(mobile);
    }
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
        setMobileForOTP(number);
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
          <Image
            priority={Image}
            src="/register.svg"
            alt=""
            width={300}
            height={350}
          />
        </div>
        <div className={registerstyles.inputs__container__bodyRegister}>
          <h2>
            Enter your Mobile <br /> Number to Register
          </h2>
          <form autoComplete="off" className={registerstyles.form} action="">
            <fieldset className={registerstyles.input__container}>
              <legend>Mobile Number</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeValues} id="number" type="text" />
              </div>
            </fieldset>
            <div id="errorContainer" className={registerstyles.errorContainer}>
              <p id="errorMobile">Enter your Mobile Number</p>
            </div>
            <Link
              href={isdetails === true ? `/verifyotp` : "/sendotp"}
              passHref
            >
              <button
                onClick={sendOTPClick}
                className={registerstyles.register__button__form}
              >
                SENT OTP
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BodySendOtp;
