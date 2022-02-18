import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Secondary from "../components/Secondary";
import Quotes from "../components/Quotes";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Arclif Architectural Services</title>
        <meta name="description" content="Arclif's Architectural Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
      <Secondary />
      <Quotes />
      <Footer />
    </div>
  );
}
