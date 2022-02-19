import Head from "next/head";
import BodySuccess from "../components/BodySuccess";
import styles from "../styles/Home.module.css";

const success = () => {
  return (
    <div className={styles.success}>
      <Head>
        <title>Success | Arclif Architectural Services</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BodySuccess />
    </div>
  );
};

export default success;
