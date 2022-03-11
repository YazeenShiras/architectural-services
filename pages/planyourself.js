import React from "react";
import Head from "next/head";
import BodyPlanYourself from "../components/BodyPlanYourself";

const planyourself = () => {
  return (
    <div>
      <Head>
        <title>Plan Yourself - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyPlanYourself />
    </div>
  );
};

export default planyourself;