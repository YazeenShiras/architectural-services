import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Script from "next/script";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Agriha - Online Architecture Services</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <meta
          name="keywords"
          content="Agriha, arclif, home services, home build, dream home, online architecture services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
