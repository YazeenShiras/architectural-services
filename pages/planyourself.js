import React from "react";
import Head from "next/head";
import BodyPlanYourself from "../components/BodyPlanYourself";

const planyourself = () => {
  return (
    <div>
      <Head>
        <title>Choose bedrooms | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/agriha.png" />
      </Head>
      <BodyPlanYourself />
    </div>
  );
};

export default planyourself;
