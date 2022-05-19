import React from "react";
import Head from "next/head";
import PlanDetailsProfile from "../components/PlanDetailsProfile";

const profilePlan = () => {
  return (
    <div>
      <Head>
        <title>Plan Details - Profile | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PlanDetailsProfile />
    </div>
  );
};

export default profilePlan;
