import React, { useEffect, useState } from "react";
import styles from "../styles/EstimatePrice.module.css";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EstimatePrice = () => {
  const [area, setArea] = useState("");
  const [plan, setPlan] = useState("");
  const [planPrice, setPlanPrice] = useState(0);
  const [location, setLocation] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (event) => {
    setArea(event.target.value);
  };

  const handleChangePlan = (event) => {
    setPlan(event.target.value);
  };

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
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
    const total = parseInt(area) * planPrice;
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

        <div className={styles.inputFieldContainer}>
          <FormControl
            variant="standard"
            sx={{
              m: 0,
              minWidth: 200,
              borderBottom: "1px solid #D3D3D3",
              outline: "none",
              marginBottom: 3,
            }}
          >
            <InputLabel
              sx={{
                color: "#0E263D",
                fontFamily: "inherit",
                fontSize: "13px",
              }}
              id="demo-simple-select-standard-label"
            >
              Area in Sqft *
            </InputLabel>
            <Select
              sx={{ color: "#0E263D" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={area}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value={300}>300 sq.ft</MenuItem>
              <MenuItem value={500}>500 sq.ft</MenuItem>
              <MenuItem value={1000}>1000 sq.ft</MenuItem>
              <MenuItem value={2000}>2000 sq.ft</MenuItem>
              <MenuItem value={2500}>2500 sq.ft</MenuItem>
              <MenuItem value={3000}>3000 sq.ft</MenuItem>
              <MenuItem value={5000}>5000 sq.ft</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              m: 0,
              minWidth: 200,
              borderBottom: "1px solid #D3D3D3",
              outline: "none",
              marginBottom: 3,
            }}
          >
            <InputLabel
              sx={{ color: "#0E263D", fontFamily: "inherit", fontSize: "13px" }}
              id="demo-simple-select-standard-label"
            >
              Choose your Plan *
            </InputLabel>
            <Select
              sx={{ color: "#0E263D" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={plan}
              onChange={handleChangePlan}
              label="Plan"
            >
              <MenuItem value="Basic">Basic</MenuItem>
              <MenuItem value="Plus">Plus</MenuItem>
              <MenuItem value="Elite">Elite</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{
              m: 0,
              minWidth: 200,
              borderBottom: "1px solid #D3D3D3",
              outline: "none",
              marginBottom: 3,
            }}
          >
            <InputLabel
              sx={{ color: "#0E263D", fontFamily: "inherit", fontSize: "13px" }}
              id="demo-simple-select-standard-label"
            >
              Location *
            </InputLabel>
            <Select
              sx={{ color: "#0E263D" }}
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={location}
              onChange={handleChangeLocation}
              label="Location"
            >
              <MenuItem value="Basic">India</MenuItem>
              <MenuItem value="Plus">Other</MenuItem>
            </Select>
          </FormControl>
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
