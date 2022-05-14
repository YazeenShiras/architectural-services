import React from "react";
import Head from "next/head";
import BodyRequirements from "../components/BodyRequirements";

const requirements = () => {
  return (
    <div>
      <Head>
        <title>Select your requirements | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyRequirements />
    </div>
  );
};

export default requirements;
