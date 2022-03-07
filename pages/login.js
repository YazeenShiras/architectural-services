import React from "react";
import Head from "next/head";
import BodyLogin from "../components/BodyLogin";

const login = () => {
  return (
    <div>
      <Head>
        <title>Register - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyLogin />
    </div>
  );
};

export default login;
