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
  name: string;
  initialValue: string | string[];
  onChange: (name: string, value: SetStateAction<string | string[]>) => void;
}

const Carousel = ({
  data,
  registerIndex,
  isSwitched,
  name,
  initialValue,
  onChange,

}: CarouselProps) => {
  const [currentValue, setCurrentValue] = useState(data.length > 0 ? data[0] : "");


  const handleNext = () => {
    const currentIndex = data.indexOf(currentValue);
    const nextIndex = currentIndex + 1;
    if (nextIndex > data.length - 1) {
      setCurrentValue(data[0]);
      if (Array.isArray(initialValue)) {
        onChange(`${name}.${registerIndex}`, data[0]);
      } else {
        onChange(name, data[0]);
      }
    } else {
      setCurrentValue(data[nextIndex]);
      if (Array.isArray(initialValue)) {
        onChange(`${name}.${registerIndex}`, data[nextIndex]);
      } else {
        onChange(name, data[nextIndex]);
      }
    }
  };

  const handleBack = () => {
    const currentIndex = data.indexOf(currentValue);
    const prevIndex = currentIndex - 1;
    if (!data[prevIndex]) {
      setCurrentValue(data[data.length - 1]);
      if (Array.isArray(initialValue)) {
        onChange(`${name}.${registerIndex}`, data[data.length - 1]);
      } else {
        onChange(name, data[data.length - 1]);
      }
    } else {
      setCurrentValue(data[prevIndex]);
      if (Array.isArray(initialValue)) {
        onChange(`${name}.${registerIndex}`, data[prevIndex]);
      } else {
        onChange(name, data[prevIndex]);
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
          readOnly
        />
      </div>
      <ArrowButton onClick={handleNext}>
        <ArrowNext />
      </ArrowButton>
    </div>
  );
};

export default Carousel;
