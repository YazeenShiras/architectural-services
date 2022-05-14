import React from "react";
import Head from "next/head";
import BodyArea from "../components/BodyArea";

const area = () => {
  return (
    <div>
      <Head>
        <title>Total area for your home | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyArea />
    </div>
  );
};

export default area;
