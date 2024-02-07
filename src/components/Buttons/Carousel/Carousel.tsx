import { useEffect, useState } from 'react';
import globalStyle from '@/GlobalClasses.module.scss';
import style from './Carousel.module.scss';
import ArrowBack from '@/components/Buttons/ArrowButtons/ArrowBack';
import ArrowNext from '../ArrowButtons/ArrowNext';
import ArrowButton from '@/components/Buttons/ArrowButtons/ArrowButton';
import wheatImg from '@/assets/wheat.svg';
import { initialValues } from '@/services/initialValues';
import { useFormContext } from 'react-hook-form';

interface CarouselProps {
  data: string[];
  registerIndex?: number;
}

const Carousel = ({ data, registerIndex }: CarouselProps) => {
  const { register, setValue } = useFormContext();
  const [currentValue, setCurrentValue] = useState(data.length > 0 ? data[0] : '');

  const isWheat = () => {
    return currentValue === data[0];
  };

  const isBread = () => {
    return data.includes(initialValues.base.bread);
  };

  const [registerName] = useState(isBread() ? 'base.bread' : `base.dressing.${registerIndex}`);

  useEffect(() => {
    if (isBread()) {
      setValue(registerName, 'WHEAT');
    }
    else {
      setValue(registerName, "OLIVE")
    }
  }, []);

  const handleNext = () => {
    const currentIndex = data.indexOf(currentValue);
    const nextIndex = currentIndex + 1;
    if (nextIndex > data.length - 1) {
      setCurrentValue(data[0]);
      setValue(registerName, data[0]);
    } else {
      setCurrentValue(data[nextIndex]);
      setValue(registerName, data[nextIndex]);
    }
  };

  const handleBack = () => {
    const currentIndex = data.indexOf(currentValue);
    const prevIndex = currentIndex - 1;
    if (!data[prevIndex]) {
      setCurrentValue(data[data.length - 1]);
      setValue(registerName, data[data.length - 1]);
    } else {
      setCurrentValue(data[prevIndex]);
      setValue(registerName, data[prevIndex]);
    }
  };

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
          {...register(`base.dressing.${registerIndex}`)}
        />
      </div>
      <ArrowButton onClick={handleNext}>
        <ArrowNext />
      </ArrowButton>
    </div>
  );
};

export default Carousel;
