import style from "./RandomizeButton.module.scss";

const Dice = () => {
  return (
    <div className={style.diceContainer}>
      <div className={style.diceTwo}></div>
      <div className={style.diceOne}></div>
    </div>
  );
};

export default Dice;
