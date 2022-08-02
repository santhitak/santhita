import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Santhita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello, I&apos;m Santhita</h1>

        <div className={styles.grid}>
          <a
            href="https://github.com/santhitak"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h2>Frontend Dev &rarr;</h2>
            <p>Basically anything that pops in my head</p>
          </a>

          <a
            href="https://www.instagram.com/kiradigm/"
            target="_blank"
            className={styles.card}
            rel="noreferrer"
          >
            <h2>Graphic designer &rarr;</h2>
            <p>I also do the Graphic design sometimes, check it out!</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
