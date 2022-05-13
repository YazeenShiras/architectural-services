import Head from "next/head";
import React from "react";
import BodyAdOnServices from "../components/BodyAdOnServices";

const adOnServices = () => {
  return (
    <div>
      <Head>
        <title>Add On Services | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/agriha.png" />
      </Head>
      <BodyAdOnServices />
    </div>
  );
};

export default adOnServices;
