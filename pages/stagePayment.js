import React from "react";
import Head from "next/head";
import StagePayments from "../components/StagePayments";

const stagePayment = () => {
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
      <StagePayments />
    </div>
  );
};

export default stagePayment;
