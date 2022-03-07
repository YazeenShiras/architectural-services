import React from "react";
import Head from "next/head";
import BodyConfirmPlan from "../components/BodyConfirmPlan";

const confirmplan = () => {
  return (
    <div>
      <Head>
        <title>Confirm your plan - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyConfirmPlan />
    </div>
  );
};

export default confirmplan;
