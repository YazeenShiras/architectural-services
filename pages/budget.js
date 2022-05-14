import React from "react";
import Head from "next/head";
import BodyBudget from "../components/BodyBudget";

const budget = () => {
  return (
    <div>
      <Head>
        <title>Total budget for your home | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyBudget />
    </div>
  );
};

export default budget;
