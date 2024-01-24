import style from "./TryAgain.module.scss";

const TryAgainButton = () => {
  return (
    <button className={style.btn} type='reset'>
      Start Again
    </button>
  );
};

export default TryAgainButton;
