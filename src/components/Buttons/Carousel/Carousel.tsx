import { SetStateAction, useState } from "react";
import globalStyle from "@/GlobalClasses.module.scss";
import style from "./Carousel.module.scss";
import ArrowBack from "@/components/Buttons/ArrowButtons/ArrowBack";
import ArrowNext from "../ArrowButtons/ArrowNext";
import ArrowButton from "@/components/Buttons/ArrowButtons/ArrowButton";
import wheatImg from "@/assets/wheat.svg";

interface CarouselProps {
  data: string[];
  registerIndex?: number;
  isSwitched: boolean;
  registerName: string;
  initialValue: string | string[];
  setValue: (name: string, value: SetStateAction<any>) => void;
  register: (...args: any[]) => any;
}

const Carousel = ({
  data,
  registerIndex,
  isSwitched,
  registerName,
  initialValue,
  setValue,
  register,
}: CarouselProps) => {
  const [currentValue, setCurrentValue] = useState(data.length > 0 ? data[0] : "");
  const [nameToRegister, setNameToRegister] = useState(
    isSwitched ? `${registerName}.${registerIndex}` : registerName
  );

  const handleNext = () => {
    const currentIndex = data.indexOf(currentValue);
    const nextIndex = currentIndex + 1;
    if (nextIndex > data.length - 1) {
      setCurrentValue(data[0]);
      if (Array.isArray(initialValue)) {
        setValue(`${registerName}.${registerIndex}`, data[0]);
      } else {
        setValue(registerName, data[0]);
      }
    } else {
      setCurrentValue(data[nextIndex]);
      if (Array.isArray(initialValue)) {
        setValue(`${registerName}.${registerIndex}`, data[nextIndex]);
      } else {
        setValue(registerName, data[nextIndex]);
      }
    }
  };

  const handleBack = () => {
    const currentIndex = data.indexOf(currentValue);
    const prevIndex = currentIndex - 1;
    if (!data[prevIndex]) {
      setCurrentValue(data[data.length - 1]);
      if (Array.isArray(initialValue)) {
        setValue(`${registerName}.${registerIndex}`, data[data.length - 1]);
      } else {
        setValue(registerName, data[data.length - 1]);
      }
    } else {
      setCurrentValue(data[prevIndex]);
      if (Array.isArray(initialValue)) {
        setValue(`${registerName}.${registerIndex}`, data[prevIndex]);
      } else {
        setValue(registerName, data[prevIndex]);
      }
    }
  };

  return (
    <div className={style.selectContainer}>
      <ArrowButton onClick={handleBack}>
        <ArrowBack />
      </ArrowButton>
      <div className={style.inputBox}>
        <label htmlFor='carousel' className={globalStyle.labelHidden}>
          Choose correct input from {data.join(", ")}
        </label>
        {!isSwitched ? <img src={wheatImg} alt='' /> : null}
        <input
          className={`${style.input} ${isSwitched && style.isWheatInput}`}
          value={currentValue}
          type='text'
          id='carousel'
          {...register(nameToRegister)}
        />
      </div>
      <ArrowButton onClick={handleNext}>
        <ArrowNext />
      </ArrowButton>
    </div>
  );
};

export default Carousel;
