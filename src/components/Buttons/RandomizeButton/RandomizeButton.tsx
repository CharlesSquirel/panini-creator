import Dice from "./Dice";
import style from "./RandomizeButton.module.scss";

const RandomizeButton = () => {
  return (
    <button className={style.btn}>
      <Dice />
      Randomize panini
    </button>
  );
};

export default RandomizeButton;
