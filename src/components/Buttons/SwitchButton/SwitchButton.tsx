import { useState } from "react";
import style from "./SwitchButton.module.scss";
import switchOnImg from "@/assets/switch-on.svg";
import switchOffImg from "@/assets/switch-off.svg";

interface SwitchButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const SwitchButton = ({ onClick, isActive }: SwitchButtonProps) => {
  return (
    <button type='button' className={style.btn} onClick={onClick}>
      {isActive ? (
        <img src={switchOnImg} alt='Switch off button' />
      ) : (
        <img src={switchOffImg} alt='Switch on button' />
      )}
    </button>
  );
};

export default SwitchButton;
