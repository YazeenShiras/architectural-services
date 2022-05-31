import React from "react";
import Head from "next/head";
import BodyDocuments from "../components/BodyDocuments";

const documents = () => {
  return (
    <div>
      <Head>
        <title>Documents | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyDocuments />
    </div>
  );
};

export default documents;
