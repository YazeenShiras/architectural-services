import React, { useEffect, useState } from "react";
import HeaderLogin from "./HeaderLogin";
import styles from "../styles/Drive.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Resizer from "react-image-file-resizer";

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
          `https://arclif-services-backend.uc.r.appspot.com/viewsingleuser/${loginId}`
        )
        .then(function (res) {
          console.log(res.data);
          setUserId(res.data.details.userdetails[0]._id);
          setName(res.data.details.userdetails[0].uname);
          setEmail(res.data.details.userdetails[0].email);
        });
    }

    async function userPlan() {
      axios
        .post(`https://arclif-services-backend.uc.r.appspot.com/getuserplan`, {
          login_id: loginId,
        })
        .then(function (res) {
          console.log(res.data);
          setPlan(res.data.details);
          setPlanServices(res.data.details.plan_services);
        });
    }

    async function documentsFromAdmin() {
      axios
        .post(
          `https://arclif-services-backend.uc.r.appspot.com/getfilesfromadmin`,
          {
            id: loginId,
          }
        )
        .then(function (res) {
          console.log(res.data);
        });
    }

    userDetails();
    userPlan();
    documentsFromAdmin();
  }, []);

  /* async function uploadFile() {
    const inpFile = document.getElementById("file");
    const url = "https://arclif-services-backend.uc.r.appspot.com/uploadfile";

    const formData = new FormData();
    formData.append("file", inpFile.files[0]);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    await axios
      .post(url, formData, config)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch(console.error);
  } */

  async function uploadPhoto() {
    const url = `https://arclif-services-backend.uc.r.appspot.com/filedataupload/${id}`;

    await axios
      .post(url, {
        filename: imageFile,
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch(console.error);
  }

  async function getUploadedFile() {
    const url = `https://arclif-services-backend.uc.r.appspot.com/getfiles/${id}`;

    await axios
      .post(url)
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch(console.error);
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
        console.log(imageFile);
      } catch (err) {
        console.log(err);
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
              <div onClick={getUploadedFile} className={styles.folderCard}>
                <Image
                  className={styles.header__logo}
                  src="/folderIcon.svg"
                  alt="Arclif Logo"
                  width={70}
                  height={70}
                />
                <p>Uploaded</p>
              </div>
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
            <p>Upload Image Files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriveDocument;
