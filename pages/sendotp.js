import React from "react";
import Head from "next/head";
import BodySendOtp from "../components/BodySendOtp";

const sendotp = () => {
  return (
    <div>
      <Head>
        <title>Register | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/agriha.png" />
      </Head>
      <BodySendOtp />
    </div>
  );
};

export default sendotp;
