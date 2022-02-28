import React from "react";
import Head from "next/head";
import BodyDesignType from "../components/BodyDesignType";

const designtype = () => {
  return (
    <div>
      <Head>
        <title>Type of Design - Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyDesignType />
    </div>
  );
};

export default designtype;
