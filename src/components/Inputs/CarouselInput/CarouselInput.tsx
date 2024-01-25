import wheatImg from '@/assets/wheat.svg';
import ArrowBack from '@/components/Buttons/ArrowButtons/ArrowBack';
import ArrowButton from '@/components/Buttons/ArrowButtons/ArrowButton';
import ArrowNext from '@/components/Buttons/ArrowButtons/ArrowNext';
import style from './CarouselInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import { InputComponentProps } from '@/services/types';
import { useEffect, useState } from 'react';
import { initialValues } from '@/services/initialValues';
import { useFormContext } from 'react-hook-form';

const CarouselInput = ({ title, data }: InputComponentProps) => {
  const { register, setValue } = useFormContext();
  const [currentValue, setCurrentValue] = useState(data.length > 0 ? data[0] : '');
  const [registerName, setRegisterName] = useState('');
console.log(title)
  const isBread = () => {
    return data.includes(initialValues.base.bread);
  };

  const isWheat = () => {
    return currentValue === data[0];
  };

  const handleNext = () => {
    const currentIndex = data.indexOf(currentValue);
    const nextIndex = currentIndex + 1;
    if (nextIndex > data.length - 1) {
      setCurrentValue(data[0]);
      setValue('base.bread', data[0]);
    } else {
      setCurrentValue(data[nextIndex]);
      setValue('base.bread', data[nextIndex]);
    }
  };

  const handleBack = () => {
    const currentIndex = data.indexOf(currentValue);
    const prevIndex = currentIndex - 1;
    if (!data[prevIndex]) {
      setCurrentValue(data[data.length - 1]);
      setValue('base.bread', data[data.length - 1]);
    } else {
      setCurrentValue(data[prevIndex]);
      setValue('base.bread', data[prevIndex]);
    }
  };
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      {!isBread() && (
        <div className={globalStyle.btnContainer}>
          <CircleButton type="add" />
          <SwitchButton />
        </div>
      )}
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
            {...register(registerName)}
          />
        </div>
        <ArrowButton onClick={handleNext}>
          <ArrowNext />
        </ArrowButton>
      </div>
    </div>
  );
};

export default CarouselInput;
