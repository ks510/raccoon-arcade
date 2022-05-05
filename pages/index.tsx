import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raccoon Arcade</title>
      </Head>
      <main>
        <h1 className='text-3xl'>Welcome to the Raccoon Arcade!</h1>
      </main>
    </div>
  );
};

export default Home;
