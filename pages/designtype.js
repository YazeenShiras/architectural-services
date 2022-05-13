import React from "react";
import Head from "next/head";
import BodyDesignType from "../components/BodyDesignType";

const designtype = () => {
  return (
    <div>
      <Head>
        <title>Choose your design for your home | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/agriha.png" />
      </Head>
      <BodyDesignType />
    </div>
  );
};

export default designtype;
