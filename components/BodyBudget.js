import React, { useState } from "react";
import styles from "../styles/BodyBudget.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { PulseLoader } from "react-spinners";

const BodyBudget = () => {
  const [budget, setBudget] = useState(500000);

  const marks = [
    {
      value: 0,
      label: "5 L",
    },
    {
      value: 20,
      label: "10 L",
    },
    {
      value: 40,
      label: "20 L",
    },
    {
      value: 60,
      label: "50 L",
    },
    {
      value: 80,
      label: "75 L",
    },
    {
      value: 100,
      label: "1 CR",
    },
  ];

  function valuetext(value) {
    if (value === 0) {
      setBudget(500000);
    } else if (value === 20) {
      setBudget(1000000);
    } else if (value === 40) {
      setBudget(2000000);
    } else if (value === 60) {
      setBudget(5000000);
    } else if (value === 80) {
      setBudget(7500000);
    } else if (value === 100) {
      setBudget(10000000);
    }
    return value;
  }

  const onNextClick = () => {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";

    localStorage.setItem("totalBudget", budget);

    window.location.href = "/area";
  };

  return (
    <div className={styles.bodyBudget}>
      <Header />
      <div className={styles.bodyBudget__container}>
        <div className={styles.image__container__budget}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/budget.svg"
            alt=""
            width={400}
            height={350}
          ></Image>
        </div>
        <div className={styles.content__container__budget}>
          <h3>
            Total budget for my <br /> dream home
          </h3>
          <div className={styles.scroller__contanier}>
            <p>Total budget for home</p>

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className={styles.progressBar}
            >
              <Box
                sx={{
                  width: "95%",
                }}
                className={styles.box}
              >
                <Slider
                  className={styles.slider}
                  aria-label="slide"
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  step={null}
                  valueLabelDisplay="off"
                  marks={marks}
                  sx={{
                    color: "#027888",
                    "& .MuiSlider-markLabel": {
                      fontFamily: "inherit",
                      fontSize: "13px",
                      marginTop: "5px",
                    },
                    "& .MuiSlider-mark": {
                      opacity: "0",
                    },
                    "& .MuiSlider-rail": {
                      height: "3px",
                    },
                    "& .MuiSlider-track": {
                      height: "3px",
                      borderRadius: "50px",
                    },
                  }}
                />
              </Box>
            </div>
          </div>
          <div onClick={onNextClick} className={styles.next__button}>
            <div className={styles.loader__container__next} id="loaderNext">
              <PulseLoader color="#ffffff" />
            </div>
            <p id="nextText">NEXT</p>
          </div>
          {/* <Link href="/area" passHref>
            <p className={styles.skipForNow}>Skip for now &gt;&gt;</p>
          </Link> */}
        </div>
      </div>
      <div className={styles.footer__container}>
        <Footer />
      </div>
      <div className={styles.footer__container__mobile}>
        <FooterMobile />
      </div>
    </div>
  );
};

export default BodyBudget;
