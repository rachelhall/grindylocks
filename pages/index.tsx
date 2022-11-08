import type { NextPage } from "next";
import Head from "next/head";

import LoginForm from "components/LoginForm";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grindylocks</title>
        <meta name="Grindylocks" content="Building the skate community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
