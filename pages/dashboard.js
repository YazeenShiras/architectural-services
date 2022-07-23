import React from "react";
import Head from "next/head";
import Dashboard from "../components/Dashboard";

const dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );
};

export default dashboard;
