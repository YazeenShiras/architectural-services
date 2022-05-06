import Head from "next/head";
import React from "react";
import BodyAdOnServices from "../components/BodyAdOnServices";

const adOnServices = () => {
  return (
    <div>
      <Head>
        <title>Ad On Services - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyAdOnServices />
    </div>
  );
};

export default adOnServices;
