import { Choices } from '../enums/Choices';

interface Props {
  userChoice: Choices | null;
  raccoonChoice: Choices | null;
  setResult: (result: 'win' | 'lose' | 'draw') => void;
}

const Winner = (props: Props) => {
  const { userChoice, raccoonChoice, setResult } = props;

  const getWinner = () => {
    if (userChoice === raccoonChoice) {
      setResult('draw');
      return 'Draw!';
    }

    if (userChoice === Choices.Rock) {
      raccoonChoice === Choices.Paper ? setResult('lose') : setResult('win');
      return raccoonChoice === Choices.Paper ? 'Raccoon' : 'You';
    }

    if (userChoice === Choices.Paper) {
      raccoonChoice === Choices.Scissors ? setResult('lose') : setResult('win');
      return raccoonChoice === Choices.Scissors ? 'Raccoon' : 'You';
    }

    if (userChoice === Choices.Scissors) {
      raccoonChoice === Choices.Rock ? setResult('lose') : setResult('win');
      return raccoonChoice === Choices.Rock ? 'Raccoon' : 'You';
    }
  };

  return (
    <>{getWinner()}</>
  );
};

export default Winner;