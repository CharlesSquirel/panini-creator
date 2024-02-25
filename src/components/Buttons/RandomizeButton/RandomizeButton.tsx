import { useContext } from "react";
import Dice from "./Dice";
import style from "./RandomizeButton.module.scss";
import { ResetContext } from "@/services/context/ResetContext";

const RandomizeButton = () => {
  const { setIsRandomized, isRandomized } = useContext(ResetContext);

  const handleOnClick = () => {
    setIsRandomized(true);

    setTimeout(() => {
      setIsRandomized(false);
    }, 1000);
  };

  return (
    <button className={style.btn} onClick={handleOnClick}>
      <Dice />
      Randomize panini
    </button>
  );
};

export default RandomizeButton;
