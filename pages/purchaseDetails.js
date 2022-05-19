import React from "react";
import Head from "next/head";
import PurchaseDetails from "../components/PurchaseDetails";

const purchaseDetails = () => {
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
      <PurchaseDetails />
    </div>
  );
};

export default purchaseDetails;
