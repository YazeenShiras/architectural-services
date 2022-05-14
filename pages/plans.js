import React from "react";
import Head from "next/head";
import BodyPlans from "../components/BodyPlans";

const plans = () => {
  return (
    <div>
      <Head>
        <title>Choose your plan | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyPlans />
    </div>
  );
};

export default plans;
