import Head from "next/head";
import styles from "../styles/Home.module.css";
import BodyDetails from "../components/BodyDetails";

const detailsform = () => {
  return (
    <div className={styles.detailsForm}>
      <Head>
        <title>Form | Arclif Architectural Services</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodyDetails />
    </div>
  );
};

export default detailsform;
