import { useState } from 'react';
import globalStyle from '@/GlobalClasses.module.scss';
import style from './Carousel.module.scss';
import ArrowBack from '@/components/Buttons/ArrowButtons/ArrowBack';
import ArrowNext from '../ArrowButtons/ArrowNext';
import ArrowButton from '@/components/Buttons/ArrowButtons/ArrowButton';
import wheatImg from '@/assets/wheat.svg';
import { initialValues } from '@/services/initialValues';
import { useFormContext } from 'react-hook-form';

interface CarouselProps {
  handleBack: () => void;
  handleNext: () => void;
  data: string[];
  currentValue: string;
}

const Carousel = ({ handleBack, handleNext, data, currentValue}: CarouselProps) => {
  const { register } = useFormContext();

  const isWheat = () => {
    return currentValue === data[0];
  };

  const isBread = () => {
    return data.includes(initialValues.base.bread);
  };

  const [registerName] = useState(isBread() ? 'base.bread' : 'base.dressing');
  const registerNameFirstField = registerName === 'base.dressing' ? `${registerName}.0` : registerName;

  return (
    <div className={style.selectContainer}>
      <ArrowButton onClick={handleBack}>
        <ArrowBack />
      </ArrowButton>
      <div className={style.inputBox}>
        <label htmlFor="carousel" className={globalStyle.labelHidden}>
          Choose correct input from {data.join(', ')}
        </label>
        {isBread() ? <img src={wheatImg} alt="" /> : null}
        <input
          className={`${style.input} ${isWheat() && style.isWheatInput}`}
          value={currentValue}
          type="text"
          id="carousel"
          {...register(registerNameFirstField)}
        />
      </div>
      <ArrowButton onClick={handleNext}>
        <ArrowNext />
      </ArrowButton>
    </div>
  );
};

export default Carousel;
