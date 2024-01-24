import { PropsWithChildren, useState } from "react";
import style from "./VegetableButton.module.scss";

const VegetableButton = ({ children }: PropsWithChildren) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnClick = () => {
    console.log(isClicked);
    setIsClicked(!isClicked);
  };
  return (
    <button
      type='button'
      className={`${style.vegBtn} ${isClicked ? style.clickedBtn : ""}`}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default VegetableButton;
