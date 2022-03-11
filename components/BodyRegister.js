import React, { useState, useEffect } from "react";
import registerstyles from "../styles/BodyRegister.module.css";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";

const BodyRegister = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isdetails, setIsdetails] = useState(false);

  async function handleSubmit() {
    const res = await fetch("https://arclifs.herokuapp.com/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        mobile_number: number,
      }),
    });
    const json = await res.json();
    console.log(json);
  }

  useEffect(() => {
    if (name !== "") {
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
    }
  }, [name, number]);

  const storeValues = () => {
    setName(document.getElementById("name").value);
    setNumber(document.getElementById("number").value);
  };

  const registerClick = () => {
    if (name === "" || number === "") {
      setIsdetails(false);
      document.getElementById("errorMobile").style.display = "block";
      document.getElementById("errorMobile").innerHTML = "Must fill all fields";
    } else {
      let isnum = /^\d+$/.test(number);
      if (number.length == 10) {
        if (isnum) {
          document.getElementById("errorMobile").style.display = "none";
        } else {
          document.getElementById("errorMobile").style.display = "block";
        }
      } else {
        document.getElementById("errorMobile").style.display = "block";
      }
      if (name === "") {
        document.getElementById("errorName").style.display = "block";
        document.getElementById("errorName").innerHTML = "Name required";
      }
      if (number === "") {
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML =
          "Mobile Number required";
      }
      if (isdetails) {
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
            Register Now to find <br /> best home plans
          </h2>
          <form autoComplete="off" className={registerstyles.form} action="">
            <fieldset className={registerstyles.input__container}>
              <legend>Name</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeValues} id="name" type="text" />
              </div>
            </fieldset>
            <fieldset className={registerstyles.input__container}>
              <legend>Mobile Number</legend>
              <div className={registerstyles.input__box}>
                <input onChange={storeValues} id="number" type="text" />
              </div>
            </fieldset>
            <div id="errorContainer" className={registerstyles.errorContainer}>
              <p id="errorName">Enter a valid Email</p>
              <p id="errorMobile">Enter a valid Mobile Number</p>
            </div>
            <Link href={isdetails === true ? `/sendotp` : "/register"} passHref>
              <button
                onClick={registerClick}
                className={registerstyles.register__button__form}
              >
                REGISTER
              </button>
            </Link>
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

export default BodyRegister;
