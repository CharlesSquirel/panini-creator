import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import globalStyle from '@/GlobalClasses.module.scss';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import Carousel from '@/components/Buttons/Carousel/Carousel';
import { InputComponentProps } from '@/services/types';
import { initialValues } from '@/services/initialValues';

const CarouselInput = ({ title, data }: InputComponentProps) => {
  const { setValue, getValues } = useFormContext();
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const [carouselCount, setCarouselCount] = useState(0);
  const [currentValue, setCurrentValue] = useState(data.length > 0 ? data[0] : "");

  const handleCarouselActive = () => {
    setIsCarouselActive(!isCarouselActive);
    setCarouselCount(0);
  };

  const handleCarouselIncrement = () => {
    setCarouselCount(carouselCount + 1);
  };

  const handleCarouselDecrement = () => {
    setCarouselCount(carouselCount - 1);
  };

  const isBread = () => {
    return data.includes(initialValues.base.bread);
  };

  const [registerName] = useState(isBread() ? 'base.bread' : 'base.dressing');

  const handleNext = () => {
    const currentIndex = data.indexOf(currentValue);
    const nextIndex = currentIndex + 1;
    const registerNameString = registerName === 'base.dressing' ? `${registerName}.${currentIndex}` : registerName;
    if (nextIndex > data.length - 1) {
      setCurrentValue(data[0]);
      if (registerName === 'base.bread') {
        setValue(registerNameString, data[0]);
      } else {
        setValue(registerNameString, [...data[0]]);
      }
    } else {
      setCurrentValue(data[nextIndex]);
      if (registerName === 'base.bread') {
        setValue(registerNameString, data[nextIndex]);
      } else {
        const dressingValues = getValues(registerNameString)
        console.log(getValues(registerNameString));

        // const filteredArray = getValuesFromRegister.filter((value) => value !== data[nextIndex])
        // setValue(registerNameString, [...filteredArray])
      }
    }
  };

  const handleBack = () => {
    const currentIndex = data.indexOf(currentValue);
    const prevIndex = currentIndex - 1;
    const registerNameString = registerName === 'base.dressing' ? `${registerName}.${currentIndex}` : registerName;
    if (!data[prevIndex]) {
      setCurrentValue(data[data.length - 1]);
      setValue(registerNameString, data[data.length - 1]);
    } else {
      setCurrentValue(data[prevIndex]);
      setValue(registerNameString, data[prevIndex]);
    }
  };

  return (
    <div className={`${globalStyle.inputContainer} ${!isBread() && globalStyle.inputContainerSelect}`}>
      <h3 className={`${globalStyle.inputTitle} ${!isBread() && globalStyle.inputTitleSelect}`}>{title}</h3>

      <div className={globalStyle.buttonAndInputContainer}>
        {!isBread() ? (
          <div className={globalStyle.buttonAndInputRow}>
            <div className={globalStyle.btnContainer}>
              <SwitchButton onClick={handleCarouselActive} isActive={isCarouselActive} />
              {isCarouselActive && <CircleButton type="add" onClick={handleCarouselIncrement} />}
            </div>
            {isCarouselActive && <Carousel handleBack={handleBack} handleNext={handleNext} currentValue={currentValue} data={data} />}
          </div>
        ) : (
          <Carousel handleBack={handleBack} handleNext={handleNext} currentValue={currentValue} data={data} />
        )}

        {Array.from({ length: carouselCount }, (_, index) => (
          <div className={globalStyle.buttonAndInputRow} key={index}>
            <CircleButton type="remove" onClick={handleCarouselDecrement} />
            <Carousel handleBack={handleBack} handleNext={handleNext} data={data} currentValue={currentValue} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselInput;
