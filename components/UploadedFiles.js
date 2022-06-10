import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Drive.module.css";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const UploadedFiles = () => {
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

  const [id, setId] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);

    async function getUploadedFile() {
      const url = `https://agriha-services.uc.r.appspot.com/getfiles/${loginId}`;

      await axios.post(url).then((res) => {
        const data = res.data;
        if (data.msg === "added file data") {
          setResponse(data.response);
        }
      });
    }

    getUploadedFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderLogin />
      <div className={styles.bgContainer__profileDetails}>
        <h3>Uploaded Images</h3>
        <div className={styles.imageContainer__response}>
          {response.map((items, index) => {
            return (
              <div className={styles.image__response} key={index}>
                <Image
                  src={items.filename}
                  alt="Arclif Logo"
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadedFiles;
