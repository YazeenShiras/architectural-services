import React from "react";
import Head from "next/head";
import BodyVerifyOtp from "../components/BodyVerifyOtp";

const verifyotp = () => {
  return (
    <div>
      <Head>
        <title>Verify OTP - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyVerifyOtp />
    </div>
  );
};

export default verifyotp;
