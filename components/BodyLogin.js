import React, { useEffect, useState } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const BodyLogin = () => {
  const [mobile, setMobile] = useState("");
  const [ismobile, setIsmobile] = useState(false);

  useEffect(() => {
    if (mobile !== "") {
      let isnum = /^\d+$/.test(mobile);
      if (mobile.length == 10) {
        if (isnum) {
          setIsmobile(true);
        } else {
          setIsmobile(false);
        }
      } else {
        setIsmobile(false);
      }
    }
  }, [mobile]);

  const storeMobile = () => {
    setMobile(document.getElementById("mobile").value);
  };

  const checkMobile = () => {
    let isnum = /^\d+$/.test(mobile);
    if (mobile === "") {
      document.getElementById("errorNumber").innerHTML =
        "Please enter Mobile Number";
      document.getElementById("errorNumber").style.display = "block";
    } else if (!isnum) {
      document.getElementById("errorNumber").style.display = "block";
    } else if (mobile.length !== 10) {
      document.getElementById("errorNumber").style.display = "block";
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
          <h2>
            Login Now to find <br /> best home
          </h2>
          <form autoComplete="off" className={registerstyles.form} action="">
            <fieldset className={registerstyles.input__container}>
              <legend>Mobile Number</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeMobile} id="mobile" type="text" />
              </div>
            </fieldset>
            <p id="errorNumber" className={registerstyles.error__varifyOtp}>
              Enter a valid Mobile Number
            </p>
            <Link href={ismobile === true ? "/verifyotp" : "/login"} passHref>
              <div
                onClick={checkMobile}
                className={registerstyles.register__button__form}
              >
                SENT OTP
              </div>
            </Link>
          </form>
          <div className={registerstyles.alreadyRegistered__container}>
            <p className={registerstyles.alreadyRegisterd}>Not registered ? </p>
            <Link href="/register" passHref>
              <p className={registerstyles.login__AlreadyRegisterd}>
                Register Now
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyLogin;
