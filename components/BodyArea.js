import React, { useState } from "react";
import styles from "../styles/BodyArea.module.css";
import scrollbarStyles from "../styles/BodyBudget.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { PulseLoader } from "react-spinners";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const BodyArea = () => {
  var authenticated = true;

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    authenticated = true;
  }
  if (!accessToken) {
    authenticated = false;
    window.location.href = "/login";
  }

  const [area, setArea] = useState(300);
  const [floor, setFloor] = useState(10);

  const marksArea = [
    {
      value: 0,
      label: "300",
    },
    {
      value: 20,
      label: "500",
    },
    {
      value: 40,
      label: "700",
    },
    {
      value: 60,
      label: "1000",
    },
    {
      value: 80,
      label: "2000",
    },
    {
      value: 100,
      label: "3000",
    },
  ];

  function valuetextArea(value) {
    if (value === 0) {
      setArea(300);
    } else if (value === 20) {
      setArea(500);
    } else if (value === 40) {
      setArea(700);
    } else if (value === 60) {
      setArea(1000);
    } else if (value === 80) {
      setArea(2000);
    } else if (value === 100) {
      setArea(3000);
    }
    return value;
  }

  const marksFloor = [
    {
      value: 0,
      label: "01",
    },
    {
      value: 35,
      label: "02",
    },
    {
      value: 65,
      label: "03",
    },
    {
      value: 100,
      label: "04",
    },
  ];

  function valuetextFloor(value) {
    if (value === 0) {
      setFloor(1);
    } else if (value === 35) {
      setFloor(2);
    } else if (value === 65) {
      setFloor(3);
    } else if (value === 100) {
      setFloor(4);
    }
    return value;
  }

  const onNextClick = () => {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";

    localStorage.setItem("totalArea", area);
    localStorage.setItem("totalFloor", floor);

    window.location.href = "/designtype";
  };

  return (
    <div className={styles.bodyArea}>
      <Header />
      <div className={styles.bodyArea__container}>
        <div className={styles.image__container__area}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/area.png"
            alt=""
            width={550}
            height={400}
          ></Image>
        </div>
        <div className={styles.content__contanier__area}>
          <h3>Total area for house</h3>
          <div className={styles.progressBar__container__area}>
            <div className={styles.scroller__contanier}>
              <p>Total Area (Sq.ft)</p>
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
                    aria-label="custom marks"
                    defaultValue={0}
                    getAriaValueText={valuetextArea}
                    step={null}
                    valueLabelDisplay="off"
                    marks={marksArea}
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
            <div className={scrollbarStyles.scroller__contanier}>
              <p>No.of Floors</p>
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
                    aria-label="custom marks"
                    defaultValue={0}
                    getAriaValueText={valuetextFloor}
                    step={null}
                    valueLabelDisplay="off"
                    marks={marksFloor}
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
          </div>
          <div onClick={onNextClick} className={styles.next__button}>
            <div className={styles.loader__container__next} id="loaderNext">
              <PulseLoader color="#ffffff" />
            </div>
            <p id="nextText">NEXT</p>
          </div>
          {/* <Link href="/designtype" passHref>
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

export default BodyArea;
