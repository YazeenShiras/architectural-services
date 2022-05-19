import React from "react";
import Head from "next/head";
import DriveDocument from "../components/DriveDocument";

const drive = () => {
  return (
    <div>
      <Head>
        <title>Purchase Details - Profile | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DriveDocument />
    </div>
  );
};

export default drive;
