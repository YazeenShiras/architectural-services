import React from "react";
import Head from "next/head";
import BodyPlans from "../components/BodyPlans";

const plans = () => {
  return (
    <div>
      <Head>
        <title>Choose plans - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyPlans />
    </div>
  );
};

export default plans;
