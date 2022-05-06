import { FC } from 'react';
import { Choices } from '../enums/Choices';

interface Props {
  choice: Choices;
  updateChoices: (userChoice: Choices) => void;
}

const RpsButton: FC<Props> = (props) => {
  const { choice, updateChoices } = props;

  const rpsClicked = () => {
    updateChoices(choice);
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
    <button className='text-9xl active:text-8xl transition-all w-40' onClick={rpsClicked}>
      <div className=''>
        <div className='h-32 flex justify-center items-center'>{rpsEmoji()}</div>
        <h2 className='text-3xl text-text font-semibold mt-3'>{choice}</h2>
      </div>
    </button>
  );
};

export default RpsButton;