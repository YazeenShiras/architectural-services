import React, { useEffect, useState } from "react";
import styles from "../styles/EstimatePrice.module.css";
import Image from "next/image";

const EstimatePrice = () => {
  const [area, setArea] = useState(0);
  const [plan, setPlan] = useState("");
  const [planPrice, setPlanPrice] = useState(0);
  const [location, setLocation] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const getArea = () => {
    setArea(document.getElementById("area").value);
  };

  const selectClick = () => {
    var select = document.getElementById("plans");
    var value = select.options[select.selectedIndex].value;
    setPlan(value);
  };

  const selectAreaClick = () => {
    var select = document.getElementById("areas");
    var value = select.options[select.selectedIndex].value;
    setArea(value);
  };

  const selectLocationClick = () => {
    var select = document.getElementById("locations");
    var value = select.options[select.selectedIndex].value;
    setLocation(value);
  };

  useEffect(() => {
    if (plan !== "") {
      if (plan === "Basic") {
        setPlanPrice(25);
      }
      if (plan === "Plus") {
        setPlanPrice(50);
      }
      if (plan === "Elite") {
        setPlanPrice(120);
      }
    }
  }, [plan]);

  const getEstimatePrice = () => {
    const total = area * planPrice;
    setTotalPrice(total);
    document.getElementById("getEstimateButton").innerHTML = "Rs. " + total;
    document.getElementById("getEstimateButton").style.color = "#ffffff";
    document.getElementById("getEstimateButton").style.backgroundColor =
      "#11907c";
  };

  return (
    <div className={styles.estimate}>
      <div className={styles.estimateContainer}>
        <h3>Estimate the Plan Price</h3>
        <p>
          Easly pridect your Estimate Price your Home Design. Please fill your
          correct data on below
        </p>
        <div className={styles.inputFieldContainer}>
          <div className={styles.textField}>
            <input
              onChange={getArea}
              id="area"
              value={area + " sq.ft"}
              type="text"
              placeholder="Area in Sqft *"
              readOnly
            />
            <div className={styles.dropdownSelectContainerTest}>
              <Image
                className={styles.header__menu}
                src="/dropdown.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className={styles.dropdownSelectContainer}>
              <select
                onChange={selectAreaClick}
                className={styles.dropdownSelect}
                name="areas"
                id="areas"
              >
                <option value="none" selected disabled hidden></option>
                <option value="300">300 sq.ft</option>
                <option value="500">500 sq.ft</option>
                <option value="1000">1000 sq.ft</option>
                <option value="2000">2000 sq.ft</option>
                <option value="2500">2500 sq.ft</option>
                <option value="3000">3000 sq.ft</option>
                <option value="5000">5000 sq.ft</option>
              </select>
            </div>
          </div>
          <div className={styles.textField}>
            <input
              value={plan}
              readOnly
              type="text"
              placeholder="Choose your Plan *"
            />
            <div className={styles.dropdownSelectContainerTest}>
              <Image
                className={styles.header__menu}
                src="/dropdown.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className={styles.dropdownSelectContainer}>
              <select
                onChange={selectClick}
                className={styles.dropdownSelect}
                name="plans"
                id="plans"
              >
                <option value="none" selected disabled hidden></option>
                <option value="Basic">Basic</option>
                <option value="Plus">Plus</option>
                <option value="Elite">Elite</option>
              </select>
            </div>
          </div>
          <div className={styles.textField}>
            <input
              value={location}
              readOnly
              type="text"
              placeholder="Location *"
            />
            <div className={styles.dropdownSelectContainerTest}>
              <Image
                className={styles.header__menu}
                src="/dropdown.svg"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className={styles.dropdownSelectContainer}>
              <select
                onChange={selectLocationClick}
                className={styles.dropdownSelect}
                name="loactions"
                id="locations"
              >
                <option value="none" selected disabled hidden></option>
                <option value="India">India</option>
              </select>
            </div>
          </div>
          <div
            id="getEstimateButton"
            onClick={getEstimatePrice}
            className={styles.getEstimateButton}
          >
            Get Estimate
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimatePrice;
