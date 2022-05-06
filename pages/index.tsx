import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import RpsButton from '../components/RpsButton';
import { useEffect, useState } from 'react';

export enum Choices {
  Rock = 'Rock', Paper = 'Paper', Scissors = 'Scissors'
}

const Home: NextPage = () => {
  const [userChoice, setUserChoice] = useState<Choices | null>(null);
  const [raccoonChoice, setRaccoonChoice] = useState<Choices | null>(null);

  useEffect(() => {
    // randomly pick between 3 choices
    switch (Math.floor(Math.random() * 3 + 1)) {
      case 1:
        setRaccoonChoice(Choices.Rock);
        break;
      case 2:
        setRaccoonChoice(Choices.Paper);
        break;
      case 3:
        setRaccoonChoice(Choices.Scissors);
        break;
    }
  }, [userChoice]);

  const getWinner = (userChoice: Choices, raccoonChoice: Choices) => {
    if (userChoice === raccoonChoice) {
      return 'Draw!';
    }

    if (userChoice === Choices.Rock) {
      return raccoonChoice === Choices.Paper ? 'Raccoon' : 'You';
    }

    if (userChoice === Choices.Paper) {
      return raccoonChoice === Choices.Scissors ? 'Raccoon' : 'You';
    }

    if (userChoice === Choices.Scissors) {
      return raccoonChoice === Choices.Rock ? 'Raccoon' : 'You';
    }

    return 'Error';
  };
  
  return (
    <div>
      <Head>
        <title>Raccoon Arcade</title>
      </Head>
      <main className='bg-background h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold text-text mb-5'>🕹️ Welcome to Raccoon Arcade! 🕹️</h1>
        <p className='text-xl font-medium text-text mb-10'>Wanna play rock paper scissors with me?</p>
        <Image src='/neutral-raccoon.svg' height={400} width={400}></Image>
        <div className='flex justify-between mt-10'>
          <RpsButton choice={Choices.Rock} setUserChoice={setUserChoice} />
          <RpsButton choice={Choices.Paper} setUserChoice={setUserChoice} />
          <RpsButton choice={Choices.Scissors} setUserChoice={setUserChoice} />
        </div>
        <p className='text-2xl text-text font-medium mt-6'>My Choice: {userChoice}</p>
        <p className='text-2xl text-text font-medium mt-6'>Raccoon's Choice: {raccoonChoice}</p>
        <p>Winner: {getWinner(userChoice as Choices, raccoonChoice as Choices)}</p>
      </main>
    </div>
  );
};

export default Home;
