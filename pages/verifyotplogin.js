import React from "react";
import Head from "next/head";
import BodyVerifyOtpLogin from "../components/BodyVerifyOtpLogin";

const verifyotplogin = () => {
  return (
    <div>
      <Head>
        <title>Verify OTP - Login | Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyVerifyOtpLogin />
    </div>
  );
};

export default verifyotplogin;
