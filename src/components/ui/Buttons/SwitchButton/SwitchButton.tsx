import style from "./SwitchButton.module.scss";
import switchOnImg from "../../../../assets/switch-on.svg";
import switchOffImg from "../../../../assets/switch-off.svg";
import { useState } from "react";

const SwitchButton = () => {
  const [isActive, setIsActive] = useState(false);
  const handleSwitchButton = () => {
    setIsActive(!isActive);
  };
  return (
    <button type='button' className={style.btn} onClick={handleSwitchButton}>
      {isActive ? (
        <img src={switchOnImg} alt='Switch off button' />
      ) : (
        <img src={switchOffImg} alt='Switch on button' />
      )}
    </button>
  );
};

export default SwitchButton;
