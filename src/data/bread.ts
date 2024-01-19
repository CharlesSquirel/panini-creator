import wheatImg from '../assets/wheat.svg';
import grainImg from '../assets/grain.svg';

type Bread = 'WHEAT' | 'FULL GRAIN';

interface IBread {
  name: Bread;
  imgUrl: string;
}

export const breadVariants: IBread[] = [
  {
    name: 'WHEAT',
    imgUrl: wheatImg,
  },
  {
    name: 'FULL GRAIN',
    imgUrl: grainImg,
  },
];
