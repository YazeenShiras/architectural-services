import React, { useEffect, useState } from "react";
import HeaderLogin from "./HeaderLogin";
import styles from "../styles/Drive.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { PulseLoader } from "react-spinners";

const DriveDocument = () => {
  const [id, setId] = useState("");
  const [plan, setPlan] = useState([]);
  const [planServices, setPlanServices] = useState([]);

  const [imageFile, setImageFile] = useState("");

  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);

    async function userDetails() {
      axios
        .get(
          `https://agriha-services.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
        });
    }

    async function userPlan() {
      axios
        .post(`https://agriha-services.uc.r.appspot.com/getuserplan`, {
          login_id: loginId,
        })
        .then(function (res) {
          setPlan(res.data.details);
          setPlanServices(res.data.details.plan_services);
        });
    }

    async function paymentDetails() {
      axios
        .get(`https://agriha-services.uc.r.appspot.com/api/cartview/${loginId}`)
        .then(function (res) {
          console.log(res.data);
        });
    }

    userDetails();
    userPlan();
    paymentDetails();
  }, []);

  async function uploadPhoto() {
    if (imageFile !== "") {
      document.getElementById("loaderUpload").style.display = "block";
      document.getElementById("uploadText").style.display = "none";

      const url = `https://agriha-services.uc.r.appspot.com/filedataupload/${id}`;

      await axios
        .post(url, {
          filename: imageFile,
        })
        .then((res) => {
          if (res.data.msg === "file added") {
            document.getElementById("loaderUpload").style.display = "none";
            document.getElementById("uploadText").style.display = "block";
            document.getElementById("errorFile").style.display = "block";
            document.getElementById("errorFile").innerHTML =
              "Image Uploaded Successfully!";
            document.getElementById("errorFile").style.color = "#1c9c76";
          }
        })
        .catch(console.error);
    } else {
      document.getElementById("errorFile").innerHTML =
        "please select image file";
      document.getElementById("errorFile").style.display = "block";
      document.getElementById("errorFile").style.color = "red";
    }
  }

  const fileChangedHandler = (event) => {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          200,
          200,
          "PNG",
          100,
          0,
          (uri) => {
            setImageFile(uri);
            if (uri) {
              document.getElementById("uploaded__image").style.display = "flex";
              document.getElementById("select__image").style.display = "none";
            }
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        setIsProfilePhotoUploaded(false);
      }
    }
  };

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <div className={styles.foldersContainer__top}>
          <div className={styles.top_container_drive}>
            <h3>Plan Documents</h3>
            <div className={styles.foldersContainer}>
              <Link href="/stagePayment" passHref>
                <div className={styles.folderCard}>
                  <Image
                    className={styles.header__logo}
                    src="/locked.svg"
                    alt="Arclif Logo"
                    width={70}
                    height={70}
                  />
                  <p>Stage 1</p>
                </div>
              </Link>
              <Link href="/stagePayment" passHref>
                <div className={styles.folderCard}>
                  <Image
                    className={styles.header__logo}
                    src="/locked.svg"
                    alt="Arclif Logo"
                    width={70}
                    height={70}
                  />
                  <p>Stage 2</p>
                </div>
              </Link>
              <Link href="/stagePayment" passHref>
                <div className={styles.folderCard}>
                  <Image
                    className={styles.header__logo}
                    src="/locked.svg"
                    alt="Arclif Logo"
                    width={70}
                    height={70}
                  />
                  <p>Stage 3</p>
                </div>
              </Link>
              <Link href="/stagePayment" passHref>
                <div className={styles.folderCard}>
                  <Image
                    className={styles.header__logo}
                    src="/locked.svg"
                    alt="Arclif Logo"
                    width={70}
                    height={70}
                  />
                  <p>Stage 4</p>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.center_container_drive}>
            <h3>Your Documents</h3>
            <div className={styles.foldersContainer}>
              <Link href="/uploaded" passHref>
                <div className={styles.folderCard}>
                  <Image
                    className={styles.header__logo}
                    src="/folderIcon.svg"
                    alt="Arclif Logo"
                    width={70}
                    height={70}
                  />
                  <p>Uploaded</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.uploadOwn__Container}>
          <h3>Upload your Dream Home Concept</h3>
          <div className={styles.uploaded__image__container}>
            <div
              id="uploaded__image"
              style={{ backgroundImage: `url(${imageFile})` }}
              className={styles.uploaded__image}
            ></div>
            <div id="select__image" className={styles.select__image}>
              <input
                name="file"
                id="file"
                type="file"
                onChange={fileChangedHandler}
              />
              <p>Select Image to Upload</p>
            </div>
          </div>
          <div onClick={uploadPhoto} className={styles.upload__button}>
            <div className={styles.loader__container__upload} id="loaderUpload">
              <PulseLoader color="#ffffff" />
            </div>
            <p id="uploadText">Upload Image Files</p>
          </div>
          <p className={styles.errorFile} id="errorFile">
            Image Uploaded Successfully!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriveDocument;
