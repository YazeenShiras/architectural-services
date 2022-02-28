import React from "react";
import Head from "next/head";
import BodyRequirements from "../components/BodyRequirements";

const requirements = () => {
  return (
    <div>
      <Head>
        <title>Choose your requirements - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyRequirements />
    </div>
  );
};

export default requirements;
