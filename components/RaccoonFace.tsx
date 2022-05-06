import Image from 'next/image';
import { FC } from 'react';

interface Props {
  raccoonFace?: 'win' | 'lose' | 'draw';
}

const RaccoonFace: FC<Props> = (props) => {
  const { raccoonFace } = props;
  const src = `/${raccoonFace}-raccoon.svg`;

  return (
    <Image src={src} height={400} width={400}></Image>
  );
};

RaccoonFace.defaultProps = {
  raccoonFace: 'draw'
};

export default RaccoonFace;