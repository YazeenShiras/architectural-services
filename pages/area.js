import React from "react";
import Head from "next/head";
import BodyArea from "../components/BodyArea";

const area = () => {
  return (
    <div>
      <Head>
        <title>Area - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyArea />
    </div>
  );
};

export default area;
