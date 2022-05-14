import Head from "next/head";
import styles from "../styles/Home.module.css";
import BodyDetails from "../components/BodyDetails";

const detailsform = () => {
  return (
    <div className={styles.detailsForm}>
      <Head>
        <title>Add your Details | Agriha</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BodyDetails />
    </div>
  );
};

export default detailsform;
