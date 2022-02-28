import React from "react";
import Head from "next/head";
import BodyValidate from "../components/BodyValidate";

const validate = () => {
  return (
    <div>
      <Head>
        <title>Validate your details - Arclif Architectural Services</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyValidate />
    </div>
  );
};

export default validate;
