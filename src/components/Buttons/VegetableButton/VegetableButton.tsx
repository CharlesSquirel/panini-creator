import { SetStateAction, useContext, useEffect, useState } from "react";
import style from "./VegetableButton.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import { ResetContext } from "@/services/context/ResetContext";
import { generateRandomBoolean } from "@/services/utils/generateRandomBoolean";

interface VegetablesProps {
  registerValue: string;
  handleRegister: () => void;
  vegetablesValues: string[];
  setVegetablesValues: React.Dispatch<SetStateAction<string[]>>;
}

const VegetableButton = ({
  registerValue,
  vegetablesValues,
  setVegetablesValues,
}: VegetablesProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { isReset, isRandomized } = useContext(ResetContext);

  useEffect(() => {
    if (isReset) {
      setIsClicked(false);
    }
    if (isRandomized) {
      setIsClicked(generateRandomBoolean());
    }
  }, [isReset, isRandomized]);

  const handleOnClick = () => {
    if (!isClicked) {
      setIsClicked(!isClicked);
      setVegetablesValues([...vegetablesValues, registerValue]);
    } else if (isClicked) {
      setIsClicked(!isClicked);
      const newVegetables = vegetablesValues.filter((veg: string) => veg !== registerValue);
      setVegetablesValues(newVegetables);
    }
  };

  return (
    <>
      <label className={globalStyle.labelHidden} htmlFor={registerValue}>
        {registerValue}
      </label>
      <input
        readOnly
        type='text'
        className={`${style.vegBtn} ${isClicked ? style.clickedBtn : ""}`}
        onClick={handleOnClick}
        value={registerValue}
        id={registerValue}
      />
    </>
  );
};

export default VegetableButton;
