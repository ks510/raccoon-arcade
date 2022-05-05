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
        <h1 className='text-5xl font-bold text-text mb-5'>🕹️ Welcome to Raccoon Arcade! 🕹️</h1>
        <p className='text-xl font-medium mb-10'>Wanna play rock paper scissors with me?</p>
        <Image src='/neutral-raccoon.svg' height={400} width={400}></Image>
      </main>
    </div>
  );
};

export default Home;
