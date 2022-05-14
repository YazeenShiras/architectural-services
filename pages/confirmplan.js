import React from "react";
import Head from "next/head";
import BodyConfirmPlan from "../components/BodyConfirmPlan";

const confirmplan = () => {
  return (
    <div>
      <Head>
        <title>Confirm your plan | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyConfirmPlan />
    </div>
  );
};

export default confirmplan;
