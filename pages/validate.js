import React from "react";
import Head from "next/head";
import BodyValidate from "../components/BodyValidate";

const validate = () => {
  return (
    <div>
      <Head>
        <title>Validate your details | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyValidate />
    </div>
  );
};

export default validate;
