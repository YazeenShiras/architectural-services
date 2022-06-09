import React, { useState } from "react";
import styles from "../styles/BodyPlanYouself.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { PulseLoader } from "react-spinners";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const BodyPlanYourself = () => {
  var authenticated = true;

  const accessToken = cookies.get("accessToken");

  if (accessToken) {
    authenticated = true;
  }
  if (!accessToken) {
    authenticated = false;
  }

  const [bedrooms, setBedrooms] = useState(0);
  const [attachedBedRooms, setAttachedBedRooms] = useState(0);

  const marksBedroom = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "1",
    },
    {
      value: 20,
      label: "2",
    },
    {
      value: 30,
      label: "3",
    },
    {
      value: 40,
      label: "4",
    },
    {
      value: 50,
      label: "5",
    },
    {
      value: 60,
      label: "6",
    },
    {
      value: 70,
      label: "7",
    },
    {
      value: 80,
      label: "8",
    },
    {
      value: 90,
      label: "9",
    },
    {
      value: 100,
      label: "10",
    },
  ];

  function valuetextBedroom(value) {
    if (value === 0) {
      setBedrooms(0);
    } else if (value === 10) {
      setBedrooms(1);
    } else if (value === 20) {
      setBedrooms(2);
    } else if (value === 30) {
      setBedrooms(3);
    } else if (value === 40) {
      setBedrooms(4);
    } else if (value === 50) {
      setBedrooms(5);
    } else if (value === 60) {
      setBedrooms(6);
    } else if (value === 70) {
      setBedrooms(7);
    } else if (value === 80) {
      setBedrooms(8);
    } else if (value === 90) {
      setBedrooms(9);
    } else if (value === 100) {
      setBedrooms(10);
    }
    return value;
  }

  const marksBedroomAttached = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "1",
    },
    {
      value: 20,
      label: "2",
    },
    {
      value: 30,
      label: "3",
    },
    {
      value: 40,
      label: "4",
    },
    {
      value: 50,
      label: "5",
    },
    {
      value: 60,
      label: "6",
    },
    {
      value: 70,
      label: "7",
    },
    {
      value: 80,
      label: "8",
    },
    {
      value: 90,
      label: "9",
    },
    {
      value: 100,
      label: "10",
    },
  ];

  function valuetextBedroomAttached(value) {
    if (value === 0) {
      setAttachedBedRooms(0);
    } else if (value === 10) {
      setAttachedBedRooms(1);
    } else if (value === 20) {
      setAttachedBedRooms(2);
    } else if (value === 30) {
      setAttachedBedRooms(3);
    } else if (value === 40) {
      setAttachedBedRooms(4);
    } else if (value === 50) {
      setAttachedBedRooms(5);
    } else if (value === 60) {
      setAttachedBedRooms(6);
    } else if (value === 70) {
      setAttachedBedRooms(7);
    } else if (value === 80) {
      setAttachedBedRooms(8);
    } else if (value === 90) {
      setAttachedBedRooms(9);
    } else if (value === 100) {
      setAttachedBedRooms(10);
    }
    return value;
  }

  const onNextClick = () => {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";

    localStorage.setItem("totalBedrooms", bedrooms);
    localStorage.setItem("totalAttachedBedrooms", attachedBedRooms);

    window.location.href = "/requirements";
  };

  return (
    <div className={styles.bodyPlanYourself}>
      <Header />
      <div className={styles.bodyPlanYourself__container}>
        <div className={styles.image__container__area}>
          <Image
            className={styles.bubble2__top__content__main__right}
            src="/planyourself.png"
            alt=""
            width={500}
            height={400}
          ></Image>
        </div>
        <div className={styles.content__contanier__area}>
          <h3>
            Plan your dream house <br /> yoursrelf
          </h3>
          <div className={styles.progressBar__container__area}>
            <div className={styles.scroller__contanier}>
              <p>No.of Bedrooms</p>
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
                    getAriaValueText={valuetextBedroom}
                    step={null}
                    valueLabelDisplay="off"
                    marks={marksBedroom}
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
            <div className={styles.scroller__contanier}>
              <p>No.of attached Bathrooms</p>
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
                    getAriaValueText={valuetextBedroomAttached}
                    step={null}
                    valueLabelDisplay="off"
                    marks={marksBedroomAttached}
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
          {/*  <Link href="/requirements" passHref>
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

export default BodyPlanYourself;
