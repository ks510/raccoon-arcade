import { FC } from 'react';
import { Choices } from '../pages';

interface Props {
  choice: Choices;
  setUserChoice: (choice: Choices) => void;
}

const RpsButton: FC<Props> = (props) => {
  const { choice, setUserChoice } = props;

  const rpsClicked = () => {
    console.log(choice);
    setUserChoice(choice);
  };

  const rpsEmoji = () => {
    switch (choice) {
      case Choices.Rock:
        return '✊';
      case Choices.Paper:
        return '✋';
      case Choices.Scissors:
        return '✌️';
      default:
        return '🤷‍♂️';
    }
  };

  return (
    <button className='text-9xl' onClick={rpsClicked}>
      <div>
        {rpsEmoji()}
        <h2 className='text-3xl text-text font-semibold mt-3'>{choice}</h2>
      </div>
    </button>
  );
};

export default RpsButton;