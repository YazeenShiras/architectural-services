import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const BodyLogin = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isdetails, setIsdetails] = useState(false);
  const [userId, setUserId] = useContext(UserContext);

  const storeMobile = () => {
    setNumber(document.getElementById("number").value);
    setPassword(document.getElementById("password").value);
  };

  async function handleSubmit() {
    const res = await fetch("https://arclifs.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile_number: number,
        password: password,
      }),
    });
    const json = await res.json();
    console.log(json);
    if (json.status === "true") {
      localStorage.setItem("token", json.token);
      let token = localStorage.getItem("token");
      console.log(token);
      setIsdetails(true);
    } else {
      setIsdetails(false);
    }
  }

  async function setCookie() {
    let url = new URL("https://arclifs.herokuapp.com/cookie/");
    url.search = new URLSearchParams({
      mobile_number: number,
      password: password,
    });

    fetch(url).then((res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    if (number !== "" && password !== "") {
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
      if (password !== "") {
        if (password.length == 8) {
          setIsdetails(true);
        } else {
          setIsdetails(false);
        }
      }
    }
    /* cleanup */
    return () => {
      setIsdetails(false);
    };
  }, [number, password]);

  const loginClick = () => {
    if (number === "" || password === "") {
      setIsdetails(false);
      document.getElementById("errorPass").style.display = "block";
      document.getElementById("errorPass").innerHTML = "Must fill all fields";
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
      if (number === "") {
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML =
          "Mobile Number required";
      }
      if (password.length == 8) {
        document.getElementById("errorPass").style.display = "none";
      } else {
        document.getElementById("errorPass").style.display = "block";
        document.getElementById("errorPass").innerHTML = "Incorrect Password";
      }
      if (isdetails) {
        handleSubmit();
        setCookie();
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
                <input onChange={storeMobile} id="number" type="text" />
              </div>
            </fieldset>
            <fieldset className={registerstyles.input__container}>
              <legend>Password</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeMobile} id="password" type="password" />
              </div>
            </fieldset>
            <p id="errorMobile" className={registerstyles.error__varifyOtp}>
              Enter a valid Mobile Number
            </p>
            <p id="errorPass" className={registerstyles.error__password}>
              Incorrect Password
            </p>
            <Link
              href={isdetails === true ? "/detailsform" : "/login"}
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
