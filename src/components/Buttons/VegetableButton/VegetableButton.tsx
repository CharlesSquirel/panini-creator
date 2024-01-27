import { useState } from "react";
import { useFormContext } from "react-hook-form";
import style from "./VegetableButton.module.scss";

interface VegetablesProps {
  registerIndex: number;
  registerValue: string;
}

const VegetableButton = ({ registerIndex, registerValue }: VegetablesProps) => {
  const { register, setValue } = useFormContext();
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    setValue(`vegetables.${registerIndex}`, registerValue);
  };

  return (
    <>
      <label>
        {registerValue}
        <input
          type='checkbox'
          className={`${style.vegBtn} ${isClicked ? style.clickedBtn : ""}`}
          {...register(`vegetables.${registerIndex}`)}
          onClick={handleOnClick}
        />
      </label>
    </>
  );
};

export default VegetableButton;
