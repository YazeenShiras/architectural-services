import Head from "next/head";
import BodySuccess from "../components/BodySuccess";
import styles from "../styles/Home.module.css";

const success = () => {
  return (
    <div className={styles.success}>
      <Head>
        <title>Payment success | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/agriha.png" />
      </Head>
      <BodySuccess />
    </div>
  );
};

export default success;
