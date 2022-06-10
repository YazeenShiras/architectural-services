/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile.module.css";
import axios from "axios";
import Image from "next/image";
import HeaderLogin from "./HeaderLogin";
import { PulseLoader } from "react-spinners";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ProfileDetails = () => {
  useEffect(() => {
    var authenticated = true;
    const accessToken = cookies.get("accessToken");

    if (accessToken) {
      authenticated = true;
    }
    if (!accessToken) {
      authenticated = false;
      window.location.href = "/login";
    }
  }, []);

  const [userdetails, setUserdetails] = useState([]);
  const [mob, setMob] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  /* const [mobile, setMobile] = useState(""); */
  const [email, setEmail] = useState("");
  const [home, setHome] = useState("");
  const [place, setPlace] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState("");
  const [members, setMembers] = useState("");
  const [citizenType, setCitizenType] = useState(true);

  const [buildingDetails, setBuildingDetails] = useState([]);
  const [requirementsData, setRequirementsData] = useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);

    console.log(loginId);

    async function handleSubmit() {
      axios
        .get(
          `https://agriha-services.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          setUserdetails(res.data.details.userdetails[0]);
          setMob(res.data.details.logindetails[0].phonenumber);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
          setHome(res.data.details.userdetails[0].housename);
          setPlace(res.data.details.userdetails[0].Place);
          setPincode(res.data.details.userdetails[0].Pincode);
          setCountry(res.data.details.userdetails[0].country);
          setProfession(res.data.details.userdetails[0].Profession);
          setMembers(res.data.details.userdetails[0].Nooffamilymembers);
          setCitizenType(res.data.details.userdetails[0].Seniorcitizen);
        });
    }

    async function buildingDetails() {
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getbuildingdetails`, {
          id: loginId,
        })
        .then(function (res) {
          setBuildingDetails(res.data.details[0]);
        });
    }

    async function requirementsDetails() {
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getrequirementslist`, {
          login_id: loginId,
        })
        .then(function (res) {
          if (res.data.msg === "success") {
            setRequirementsData(res.data.details.requirements_list);
          }
        });
    }

    async function checkPayed() {
      console.log(loginId);
      axios
        .post(`https://agriha-services.uc.r.appspot.com/isPaymentcompleted`, {
          userId: loginId,
        })
        .then(function (res) {
          console.log(res.data);

          for (let i = 0; i < res.data.details.length; i++) {
            if (res.data.details[i].paymentmode === "downpayment") {
              console.log("paid");
              handleSubmit();
              buildingDetails();
              requirementsDetails();
              break;
            } else {
              window.location.href = "/";
            }
          }
        });
    }

    checkPayed();
  }, []);

  async function updateUserDetails() {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";
    axios
      .put(`https://agriha-services.uc.r.appspot.com/updateuser/${id}`, {
        uname: name,
        email: email,
        housename: home,
        Place: place,
        Pincode: pincode,
        country: country,
        Profession: profession,
        Nooffamilymembers: members,
        Seniorcitizen: citizenType,
      })
      .then(function (res) {
        if (res.data.msg === "userData  updated !!") {
          window.location.reload();
        }
      });
  }

  const editClick = () => {
    document.getElementById("inputBeforeEditContainer").style.display = "none";
    document.getElementById("editClickContainer").style.display = "block";
  };

  const storeValues = () => {
    setName(document.getElementById("name").value);
    setEmail(document.getElementById("email").value);
    setHome(document.getElementById("homeName").value);
    setPlace(document.getElementById("place").value);
    setPincode(document.getElementById("pincode").value);
    setCountry(document.getElementById("country").value);
    setProfession(document.getElementById("profession").value);
    setMembers(document.getElementById("members").value);
    /* if (
      document.getElementById("seniorcitizen").value === "Yes" ||
      document.getElementById("seniorcitizen").value === "yes"
    ) {
      setCitizenType(true);
    }
    if (
      document.getElementById("seniorcitizen").value === "No" ||
      document.getElementById("seniorcitizen").value === "no"
    )
      setCitizenType(false); */
  };

  return (
    <div className={styles.ProfileDetails}>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.formContainer__settings}>
          <div className={styles.inputboxContainers__update}>
            <form autoComplete="off" className={styles.form__update}>
              <div
                className={styles.inputBeforeEditContainer}
                id="inputBeforeEditContainer"
              >
                <div className={styles.profileTitleContainer}>
                  <h4>Personal Details</h4>
                  <div
                    onClick={editClick}
                    className={styles.editButton__container__card__validte}
                  >
                    <Image
                      src="/editIcon.svg"
                      alt=""
                      width={12}
                      height={12}
                    ></Image>
                    <p>EDIT</p>
                  </div>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Name</h5>
                  <p>{userdetails.uname}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Mobile Number</h5>
                  <p>{mob}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Email</h5>
                  <p>{userdetails.email}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>House Name</h5>
                  <p>{userdetails.housename}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Place</h5>
                  <p>{userdetails.Place}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Pincode</h5>
                  <p>{userdetails.Pincode}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Country</h5>
                  <p>{userdetails.country}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>Profession</h5>
                  <p>{userdetails.Profession}</p>
                </div>
                <div className={styles.fieldContainer}>
                  <h5>No. of Family Members</h5>
                  <p>{userdetails.Nooffamilymembers}</p>
                </div>
                <div className={styles.fieldContainerLast}>
                  <h5>Senior Citizen</h5>
                  <p>{userdetails.Seniorcitizen === true ? "Yes" : "No"}</p>
                </div>
              </div>
              <div
                className={styles.editClickContainer}
                id="editClickContainer"
              >
                <div className={styles.profileTitleContainer}>
                  <h3>Personal Details</h3>
                </div>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Name</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={name}
                      id="name"
                      type="text"
                      name="username"
                    />
                  </div>
                </fieldset>
                {/* <fieldset className={styles.input__container__form__update}>
                  <legend>Mobile Number</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues} defaultValue={mob}
                      id="moble"
                      type="text"
                      name="mobile"
                    />
                  </div>
                </fieldset> */}
                <fieldset className={styles.input__container__form__update}>
                  <legend>Email</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={email}
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Home Name</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={home}
                      id="homeName"
                      type="text"
                      name="homeName"
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Place</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={place}
                      id="place"
                      type="text"
                      name="place"
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Pincode</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      id="pincode"
                      onChange={storeValues}
                      defaultValue={pincode}
                      type="text"
                      name="pincode"
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Country</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={country}
                      id="country"
                      type="text"
                      name="country"
                      readOnly
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Profession</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={profession}
                      id="profession"
                      type="text"
                      name="profession"
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>No.of Family Members</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={members}
                      id="members"
                      type="text"
                      name="members"
                    />
                  </div>
                </fieldset>
                <fieldset className={styles.input__container__form__update}>
                  <legend>Seniorcitizen ?</legend>
                  <div className={styles.input__box__form__update}>
                    <input
                      onChange={storeValues}
                      defaultValue={citizenType === true ? "Yes" : "No"}
                      id="members"
                      type="text"
                      name="members"
                    />
                  </div>
                </fieldset>
                <div
                  onClick={updateUserDetails}
                  className={styles.next__button}
                >
                  <div
                    className={styles.loader__container__next}
                    id="loaderNext"
                  >
                    <PulseLoader color="#ffffff" />
                  </div>
                  <p id="nextText">SAVE</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.formContainer__settings}>
          <div className={styles.inputBeforeEditContainer}>
            <div className={styles.profileTitleContainer}>
              <h4>Building Details</h4>
            </div>
            <div className={styles.fieldContainer}>
              <h5>Total Budget for home</h5>
              <p>{buildingDetails.total_budget} Rs.</p>
            </div>
            <div className={styles.fieldContainer}>
              <h5>Total Area</h5>
              <p>{buildingDetails.total_area} Sq.Ft</p>
            </div>
            <div className={styles.fieldContainer}>
              <h5>No.of Floors</h5>
              <p>{buildingDetails.no_of_floors}</p>
            </div>
            <div className={styles.fieldContainer}>
              <h5>Type of Design</h5>
              <p>{buildingDetails.design_type}</p>
            </div>
            <div className={styles.fieldContainer}>
              <h5>No.of Bedrooms</h5>
              <p>{buildingDetails.no_of_bedrooms}</p>
            </div>
            <div className={styles.fieldContainer}>
              <h5>No.of attached Bathrooms</h5>
              <p>{buildingDetails.attached_bathrooms}</p>
            </div>
            <div className={styles.requirememntsFieldContainer}>
              <h5>Building Requirements</h5>
              {requirementsData.map((data, index) => {
                return (
                  <div key={index}>
                    <p>
                      {index + 1}. {data}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
