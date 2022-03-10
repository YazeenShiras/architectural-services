import React from "react";
import Head from "next/head";
import BodySendOtp from "./BodySendOtp";

const sendotp = () => {
  return (
    <div>
      <Head>
        <title>Send OTP - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodySendOtp />
    </div>
  );
};

export default sendotp;
