import style from "./TryAgain.module.scss";

const TryAgainButton = () => {
  return (
    <button className={style.btn} type="button">
      Start Again
    </button>
  );
};

export default TryAgainButton;
