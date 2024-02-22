import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import globalStyle from '@/GlobalClasses.module.scss';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import Carousel from '@/components/Buttons/Carousel/Carousel';

interface CarouselInput {
  title: string;
  isSwitched: boolean;
  data: string[];
  name: string;
  initialValue: string | string[];
}

const CarouselInput = ({ title, data, isSwitched, name, initialValue }: CarouselInput) => {
  const { setValue, getValues, register } = useFormContext();
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
    const registeredValues = getValues(name);
    setValue(name, registeredValues.slice(0, carouselCount));
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
            {isCarouselActive && (
              <Carousel
                {...register(isSwitched ? `${name}.0` : name)}
                data={data}
                registerIndex={0}
                isSwitched={isSwitched}
                name={name}
                initialValue={initialValue}
                onChange={setValue}
              />
            )}
          </div>
        ) : (
          <Carousel {...register(name)} data={data} isSwitched={isSwitched} name={name} initialValue={initialValue} onChange={setValue} />
        )}

        {Array.from({ length: carouselCount }, (_, index) => (
          <div className={globalStyle.buttonAndInputRow} key={index}>
            <CircleButton type="remove" onClick={handleCarouselDecrement} />
            <Carousel
              {...register(isSwitched ? `${name}.${index + 1}` : name)}
              data={data}
              registerIndex={index + 1}
              isSwitched={isSwitched}
              name={name}
              initialValue={initialValue}
              onChange={setValue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselInput;
