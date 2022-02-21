import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
    </div>
  );
}
