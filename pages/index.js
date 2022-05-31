import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import ContactButton from "../components/ContactButton";

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
          content="Agriha, arclif, home services, home build, dream home, online architecture services, architecture firms near me, residential architects near me, commercial architects near me, architecture companies near me, local residential architects near me,home architects near me, local architects near me, home design kerala, house architects, floor plan, home plan, house plan, architecture plan, veedu, veedu plans "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles.contactUs__button__container}>
        <ContactButton />
      </div>
    </div>
  );
}
