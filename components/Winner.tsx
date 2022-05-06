import { Choices } from '../enums/Choices';
import { FC } from 'react';

interface Props {
  userChoice: Choices | null;
  raccoonChoice: Choices | null;
}

const Winner = (props: Props) => {
  const { userChoice, raccoonChoice } = props;

  const getWinner = () => {
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
  };

  return (
    <>{getWinner()}</>
  );
};

export default Winner;