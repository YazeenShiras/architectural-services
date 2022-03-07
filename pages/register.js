import React from "react";
import Head from "next/head";
import BodyRegister from "../components/BodyRegister";

const register = () => {
  return (
    <div>
      <Head>
        <title>Register - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyRegister />
    </div>
  );
};

export default register;
