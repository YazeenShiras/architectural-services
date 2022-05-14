import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Agriha - Online Architecture Services</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
