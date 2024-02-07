import { useEffect, useState } from 'react';
import globalStyle from '@/GlobalClasses.module.scss';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import Carousel from '@/components/Buttons/Carousel/Carousel';
import { InputComponentProps } from '@/services/types';
import { initialValues } from '@/services/initialValues';
import { useFormContext } from 'react-hook-form';

const CarouselInput = ({ title, data }: InputComponentProps) => {
  const { setValue, getValues } = useFormContext();
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const [carouselCount, setCarouselCount] = useState(0);

  const handleCarouselActive = () => {
    setIsCarouselActive(!isCarouselActive);
    setCarouselCount(0);
  };

  const handleCarouselIncrement = () => {
    setCarouselCount(carouselCount + 1);
  };

  const handleCarouselDecrement = () => {
    setCarouselCount(carouselCount - 1);
    // usuwanie ostatniego rekordu dressing
    const registeredValues = getValues('base.dressing');
    setValue('base.dressing', registeredValues.slice(0, carouselCount));
  };

  const isBread = () => {
    return data.includes(initialValues.base.bread);
  };

  useEffect(() => {
    if (!isCarouselActive) {
      setValue('base.dressing', []);
    }
  }, [isCarouselActive]);

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
            {isCarouselActive && <Carousel data={data} registerIndex={0} />}
          </div>
        ) : (
          <Carousel data={data} />
        )}

        {Array.from({ length: carouselCount }, (_, index) => (
          <div className={globalStyle.buttonAndInputRow} key={index}>
            <CircleButton type="remove" onClick={handleCarouselDecrement} />
            <Carousel data={data} registerIndex={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselInput;
