import React from "react";
import Head from "next/head";
import BodyBudget from "../components/BodyBudget";

const budget = () => {
  return (
    <div>
      <Head>
        <title>Budget - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyBudget />
    </div>
  );
};

export default budget;
