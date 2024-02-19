import { useContext } from "react";
import style from "./TryAgain.module.scss";
import { AnimationConext } from "@/services/context/AnimationContext";


const TryAgainButton = () => {
  return (
    <button className={style.btn} type="button" >
      Start Again
    </button>
  );
};

export default TryAgainButton;
