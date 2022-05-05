import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Raccoon Arcade</title>
      </Head>
      <main className='bg-background h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-text'>Welcome to the Raccoon Arcade!</h1>
        <Image src='/neutral-raccoon.svg' height={300} width={300}></Image>
      </main>
    </div>
  );
};

export default Home;
