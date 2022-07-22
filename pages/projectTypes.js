import React from "react";
import Head from "next/head";
import ProjectTypes from "../components/ProjectTypes";

const projectTypes = () => {
  return (
    <div>
      <Head>
        <title>Project Types | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectTypes />
    </div>
  );
};

export default projectTypes;
