import React from "react";
import Head from "next/head";
import ProfileDetails from "../components/ProfileComponent";

const profile = () => {
  return (
    <div>
      <Head>
        <title>Profile | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileDetails />
    </div>
  );
};

export default profile;
