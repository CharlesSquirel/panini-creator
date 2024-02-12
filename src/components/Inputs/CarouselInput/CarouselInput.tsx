import { useState } from 'react';
import globalStyle from '@/GlobalClasses.module.scss';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import Carousel from '@/components/Buttons/Carousel/Carousel';
import { useFormContext } from 'react-hook-form';

interface CarouselInput {
  title: string;
  isSwitched: boolean;
  data: string[];
  registerName: string;
  initialValue: string | string[];

}

const CarouselInput = ({ title, data, isSwitched, registerName, initialValue }: CarouselInput) => {
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
    const registeredValues = getValues(registerName);
    setValue(registerName, registeredValues.slice(0, carouselCount));
  };

  return (
    <div className={`${globalStyle.inputContainer} ${isSwitched && globalStyle.inputContainerSelect}`}>
      <h3 className={`${globalStyle.inputTitle} ${isSwitched && globalStyle.inputTitleSelect}`}>{title}</h3>

      <div className={globalStyle.buttonAndInputContainer}>
        {isSwitched ? (
          <div className={globalStyle.buttonAndInputRow}>
            <div className={globalStyle.btnContainer}>
              <SwitchButton onClick={handleCarouselActive} isActive={isCarouselActive} />
              {isCarouselActive && <CircleButton type="add" onClick={handleCarouselIncrement} />}
            </div>
            {isCarouselActive && <Carousel data={data} registerIndex={0} isSwitched={isSwitched} registerName={registerName} initialValue={initialValue} setValue={setValue}/>}
          </div>
        ) : (
          <Carousel data={data} isSwitched={isSwitched} registerName={registerName} initialValue={initialValue} setValue={setValue}/>
        )}

        {Array.from({ length: carouselCount }, (_, index) => (
          <div className={globalStyle.buttonAndInputRow} key={index}>
            <CircleButton type="remove" onClick={handleCarouselDecrement} />
            <Carousel data={data} registerIndex={index + 1} isSwitched={isSwitched} registerName={registerName} initialValue={initialValue} setValue={setValue}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselInput;
