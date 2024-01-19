import { breadVariants } from '../../../data/bread';
import ArrowBack from '../Buttons/ArrowButtons/ArrowBack';
import ArrowButton from '../Buttons/ArrowButtons/ArrowButton';
import ArrowNext from '../Buttons/ArrowButtons/ArrowNext';
import style from './CarouselInput.module.scss';
import globalStyle from '../../../GlobalClasses.module.scss';

interface ICarousel {
  title: string;
}

const CarouselInput = ({ title }: ICarousel) => {
  const varriantNames = breadVariants.map((e) => e.name);
  const varriantImages = breadVariants.map((e) => e.imgUrl);
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.selectContainer}>
        <ArrowButton>
          <ArrowBack />
        </ArrowButton>
        <p className={style.input}>
          <img src={varriantImages[0]} alt="" /> {varriantNames[0]}
        </p>
        <ArrowButton>
          <ArrowNext />
        </ArrowButton>
      </div>
    </div>
  );
};

export default CarouselInput;
