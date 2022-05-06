import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/BodyValidate.module.css";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Image from "next/image";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { Link } from "@mui/material";

const BodyValidate = () => {
  const [loginId, setLoginId] = useState("");

  const [budget, setBudget] = useState(0);
  const [area, setArea] = useState(0);
  const [floor, setFloor] = useState(0);
  const [design, setDesign] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [attachedBedRooms, setAttachedBedRooms] = useState(0);

  const [requirements, setRequirements] = useState([]);

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [profession, setProfession] = useState("");
  const [members, setMembers] = useState("");

  const [citizenType, setCitizenType] = useState("");

  const [requirementsData, setRequirementsData] = useState([]);

  useEffect(() => {
    const loginIdLoc = localStorage.getItem("loginId");
    const areaLoc = localStorage.getItem("totalArea");
    const floorLoc = localStorage.getItem("totalFloor");
    const budgetloc = localStorage.getItem("totalBudget");
    const designLoc = localStorage.getItem("designType");
    const bedroomsLoc = localStorage.getItem("totalBedrooms");
    const attachedBedRoomsLoc = localStorage.getItem("totalAttachedBedrooms");

    setLoginId(loginIdLoc);
    setArea(areaLoc);
    setFloor(floorLoc);
    setBudget(budgetloc);
    setDesign(designLoc);
    setBedrooms(bedroomsLoc);
    setAttachedBedRooms(attachedBedRoomsLoc);

    async function userDetails() {
      axios
        .get(
          `https://arclif-services-backend.uc.r.appspot.com/viewsingleuser/${loginIdLoc}`
        )
        .then(function (res) {
          console.log(res.data);
          console.log(res.data.details.userdetails[0]);
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setNumber(res.data.details.logindetails[0].phonenumber);
          setEmail(res.data.details.userdetails[0].email);
          setPlace(res.data.details.userdetails[0].Place);
          setProfession(res.data.details.userdetails[0].Profession);
          setMembers(res.data.details.userdetails[0].Nooffamilymembers);
          setCitizenType(res.data.details.userdetails[0].Seniorcitizen);
        });
    }

    async function requirementsDetails() {
      axios
        .post(
          `https://arclif-services-backend.uc.r.appspot.com/getrequirementslist`,
          {
            login_id: loginIdLoc,
          }
        )
        .then(function (res) {
          console.log(res.data);
          if (res.data.msg === "success") {
            console.log(res.data.details.requirements_list);
            setRequirementsData(res.data.details.requirements_list);
          }
        });
    }

    if (loginIdLoc !== "" && loginIdLoc !== undefined) {
      userDetails();
      requirementsDetails();
    }
  }, []);

  const storeValues = () => {
    setName(document.getElementById("name").value);
    /* setNumber(document.getElementById("number").value); */
    setEmail(document.getElementById("email").value);
    setPlace(document.getElementById("place").value);
    setProfession(document.getElementById("profession").value);
    setMembers(document.getElementById("members").value);
    if (
      document.getElementById("seniorcitizen").value === "Yes" ||
      document.getElementById("seniorcitizen").value === "yes"
    ) {
      setCitizenType(true);
    }
    if (
      document.getElementById("seniorcitizen").value === "No" ||
      document.getElementById("seniorcitizen").value === "no"
    )
      setCitizenType(false);
  };

  const storeBuildingDetails = () => {
    setBudget(document.getElementById("budget").value);
    setArea(document.getElementById("area").value);
    setFloor(document.getElementById("floor").value);
    setDesign(document.getElementById("design").value);
    setBedrooms(document.getElementById("bedrooms").value);
    setAttachedBedRooms(document.getElementById("attachedBedrooms").value);
  };

  async function addbuildingDetails() {
    axios
      .post(
        `https://arclif-services-backend.uc.r.appspot.com/addbuildingdetails`,
        {
          no_of_floors: floor,
          total_area: area,
          no_of_bedrooms: bedrooms,
          attached_bathrooms: attachedBedRooms,
          design_type: design,
          total_budget: budget,
          home_requirements: requirements,
          login_id: loginId,
        }
      )
      .then(function (res) {
        console.log(res.data);
        window.location.href = "/plans";
      });
  }

  async function updateUserDetails() {
    document.getElementById("loaderNext").style.display = "block";
    document.getElementById("nextText").style.display = "none";
    axios
      .put(
        `https://arclif-services-backend.uc.r.appspot.com/updateuser/${userId}`,
        {
          login_id: "626a66bfab50741321bd1720",
          uname: name,
          email: email,
          Place: place,
          Profession: profession,
          Nooffamilymembers: members,
          Seniorcitizen: citizenType,
        }
      )
      .then(function (res) {
        console.log(res.data);
      });
  }

  const editButtonClick = () => {};

  return (
    <div className={styles.bodyValidate}>
      <Header />
      <div
        className={styles.bodyValidate__container}
        style={{ backgroundImage: `url('/bgdesign.svg')` }}
      >
        <h3>Validate your details</h3>
        <p>Edit your details here</p>
        <div className={styles.cardsContainer__validate}>
          <div className={styles.card__validate}>
            <div className={styles.titleContainer__card__validate}>
              <h5>Personal Details</h5>
              <div className={styles.editButton__container__card__validte}>
                <Image
                  src="/editIcon.svg"
                  alt=""
                  width={12}
                  height={12}
                ></Image>
                <p>EDIT</p>
              </div>
            </div>
            <div className={styles.rowsContainer__card__validate}>
              <div className={styles.row__card__validate}>
                <h6>Name</h6>
                <input
                  onChange={storeValues}
                  id="name"
                  type="text"
                  defaultValue={name}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>Mobile Number</h6>
                <input id="number" type="text" defaultValue={number} />
              </div>
              <div className={styles.row__card__validate}>
                <h6>Email</h6>
                <input
                  onChange={storeValues}
                  id="email"
                  type="text"
                  defaultValue={email}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>Place</h6>
                <input
                  onChange={storeValues}
                  id="place"
                  type="text"
                  defaultValue={place}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>Profession</h6>
                <input
                  onChange={storeValues}
                  id="profession"
                  type="text"
                  defaultValue={profession}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>No.of Family Members</h6>
                <input
                  onChange={storeValues}
                  id="members"
                  type="text"
                  defaultValue={`${members}`}
                />
              </div>
              <div className={styles.row__card__validate__last}>
                <h6>Senior Citizen?</h6>
                <input
                  onChange={storeValues}
                  id="seniorcitizen"
                  type="text"
                  defaultValue={citizenType === true ? "Yes" : "No"}
                />
              </div>
            </div>
          </div>
          <div className={styles.card__validate}>
            <div className={styles.titleContainer__card__validate}>
              <h5>Building Details</h5>
              <div className={styles.editButton__container__card__validte}>
                <Image
                  src="/editIcon.svg"
                  alt=""
                  width={12}
                  height={12}
                ></Image>
                <p>EDIT</p>
              </div>
            </div>
            <div className={styles.rowsContainer__card__validate}>
              <div className={styles.row__card__validate}>
                <h6>Total Budget for home</h6>
                <input
                  onChange={storeBuildingDetails}
                  type="text"
                  id="budget"
                  defaultValue={budget}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>Total Area(Sq.Ft)</h6>
                <input
                  onChange={storeBuildingDetails}
                  type="text"
                  id="area"
                  defaultValue={area}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>No.of Floors</h6>
                <input
                  onChange={storeBuildingDetails}
                  type="text"
                  id="floor"
                  defaultValue={floor}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>Type of Design</h6>
                <input
                  onChange={storeBuildingDetails}
                  type="text"
                  id="design"
                  defaultValue={design}
                />
              </div>
              <div className={styles.row__card__validate}>
                <h6>No.of Bedrooms</h6>
                <input type="text" id="bedrooms" defaultValue={bedrooms} />
              </div>
              <div className={styles.row__card__validate__last}>
                <h6>No.of attached Bedrooms</h6>
                <input
                  onChange={storeBuildingDetails}
                  type="text"
                  id="attachedBedrooms"
                  defaultValue={attachedBedRooms}
                />
              </div>
            </div>
          </div>
          <div className={styles.card__validate}>
            <div className={styles.titleContainer__card__validate}>
              <h5>Requirement List</h5>
              <Link
                href="/requirements"
                className={styles.editButton__container__card__validte}
              >
                <Image
                  src="/editIcon.svg"
                  alt=""
                  width={12}
                  height={12}
                ></Image>
                <p>EDIT</p>
              </Link>
            </div>
            <div className={styles.rowsContainer__card__validate__last}>
              <div>
                <ul>
                  {requirementsData.map((data, index) => {
                    return <li key={index}>{data}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div onClick={addbuildingDetails} className={styles.next__button}>
          <div className={styles.loader__container__next} id="loaderNext">
            <PulseLoader color="#ffffff" />
          </div>
          <p id="nextText">NEXT</p>
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

export default BodyValidate;
