import React, { useEffect, useState, useContext } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { LoginNumberContext } from "../context/LoginNumberContext";

const BodyLogin = () => {
  const [number, setNumber] = useState("");
  const [isdetails, setIsdetails] = useState(false);
  const [loginNumber, setLoginNumber] = useContext(LoginNumberContext);

  const storeMobile = () => {
    setNumber(document.getElementById("number").value);
  };

  async function handleSubmit() {
    let url = new URL("https://arclifs.herokuapp.com/OTP_Genarator/login");
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
    }
  }, [number]);

  const loginClick = () => {
    if (number === "") {
      setIsdetails(false);
      document.getElementById("errorMobile").style.display = "block";
      document.getElementById("errorMobile").innerHTML =
        "Mobile Number required";
    } else {
      let isnum = /^\d+$/.test(number);
      if (number.length == 10) {
        if (isnum) {
          document.getElementById("errorMobile").style.display = "none";
        } else {
          document.getElementById("errorMobile").style.display = "block";
          document.getElementById("errorMobile").innerHTML =
            "Enter a valid Mobile Number";
        }
      } else {
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML =
          "Enter a valid Mobile Number";
      }
      if (isdetails) {
        handleSubmit();
        setLoginNumber(number);
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
          <h2>
            Login Now to find <br /> best Home
          </h2>
          <form autoComplete="off" className={registerstyles.form} action="">
            <fieldset className={registerstyles.input__container}>
              <legend>Mobile Number</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeMobile} id="number" type="text" />
              </div>
            </fieldset>
            <p id="errorMobile" className={registerstyles.error__varifyOtp}>
              Enter a valid Mobile Number
            </p>
            <Link
              href={isdetails === true ? "/verifyotplogin" : "/login"}
              passHref
            >
              <div
                onClick={loginClick}
                className={registerstyles.register__button__form}
              >
                LOGIN
              </div>
            </Link>
          </form>
          <div className={registerstyles.alreadyRegistered__container}>
            <p className={registerstyles.alreadyRegisterd}>Not registered ? </p>
            <Link href="/sendotp" passHref>
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
