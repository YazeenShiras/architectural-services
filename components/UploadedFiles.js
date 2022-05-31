import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Drive.module.css";
import HeaderLogin from "./HeaderLogin";
import Image from "next/image";

const UploadedFiles = () => {
  const [id, setId] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const loginId = localStorage.getItem("loginId");
    setId(loginId);

    async function getUploadedFile() {
      const url = `https://agriha-services.uc.r.appspot.com/getfiles/${loginId}`;

      await axios
        .post(url)
        .then((res) => {
          const data = res.data;
          console.log(data);

          if (data.msg === "added file data") {
            setResponse(data.response);
          }
        })
        .catch(console.error);
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
