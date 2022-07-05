import React, { useState } from "react";
import styles from "../styles/GetInTouch.module.css";
import Image from "next/image";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const storeValues = () => {
    setEmail(document.getElementById("email").value);
    setName(document.getElementById("name").value);
    setNumber(document.getElementById("number").value);
    setMessage(document.getElementById("message").value);
  };

  async function handleSubmit() {
    console.log(email);
    await fetch("services-api-dev4.ap-south-1.elasticbeanstalk.com/enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        contact: number,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className={styles.getInTouch}>
      <div className={styles.title__getInTouch} id="contact">
        <h2>Get in touch</h2>
        <p>
          Our clinets send us bunch of Smiles with our Services and we love them
        </p>
      </div>
      <div className={styles.card__getInTouch}>
        <div className={styles.left__card__getInTouch}>
          <div className={styles.text__left__card__getInTouch}>
            <h3>Contact Information</h3>
            <p>
              Our clinets send us bunch of Smiles with our Services and we love
              them
            </p>
            <div className={styles.logo__left__card__getInTouch}>
              <Image src="/arclifLogo.svg" alt="" width={120} height={40} />
            </div>
            <h4>Address</h4>
            <p>
              Our clinets send us bunch of Smiles with our Services <br /> and
              we love them
            </p>
            <div className={styles.numbers__left__card__getInTouch}>
              <h5>+91 5556894782</h5>
              <h5>+91 5556894782</h5>
            </div>
            <div className={styles.buttonContainer__left__card__getInTouch}>
              <a
                href="https://www.google.com/maps/place/Arclif+Technologies+Pvt+Ltd/@11.2540584,75.8349428,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba65b92a5357bad:0x2e562acd470a7e0e!8m2!3d11.2540584!4d75.8371315"
                className={styles.getLocation__Button}
              >
                <div>
                  <Image
                    src="/locationIcon.svg"
                    alt=""
                    width={17}
                    height={17}
                  />
                </div>
                Get location
              </a>
              <a href="tel:9995111325" className={styles.call__Button}>
                <div>
                  <Image src="/callIcon.svg" alt="" width={17} height={17} />
                </div>
                Call
              </a>
            </div>
          </div>
          <div className={styles.social__left__card__getInTouch}>
            <a href="https://www.instagram.com/arclifonline">
              <Image src="/instagramIcon.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://in.linkedin.com/company/arclif">
              <Image src="/linkedInIcon.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://arclif.com/">
              <Image src="/webIcon.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://www.facebook.com/arclifonline/">
              <Image src="/facebookIcon.svg" alt="" width={20} height={20} />
            </a>
          </div>
        </div>
        <div className={styles.right__card__getInTouch}>
          <h3>Send Message</h3>
          <p>
            Our clinets send us bunch of Smiles with our Services and we love
            them
          </p>
          <div className={styles.inputConatiner__getInTouch}>
            <input
              onChange={storeValues}
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.inputConatiner__getInTouch}>
            <input
              onChange={storeValues}
              id="email"
              type="email"
              placeholder="Email id"
            />
          </div>
          <div className={styles.inputConatiner__getInTouch}>
            <input
              onChange={storeValues}
              id="number"
              type="tel"
              placeholder="Phone number"
            />
          </div>
          <div className={styles.textAreaConatiner__getInTouch}>
            <textarea
              onChange={storeValues}
              id="message"
              placeholder="Type your message here ..."
            />
          </div>
          <div onClick={handleSubmit} className={styles.sendMessageButton}>
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
