import style from "./SelectInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import SelectWithDropdown from "@/components/Inputs/SelectWithDropdown/SelectWithDropdown";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import SwitchButton from "@/components/Buttons/SwitchButton/SwitchButton";
import { InputComponentProps } from "@/services/types";
import { useState } from "react";

const SelectInput = ({ title, data }: InputComponentProps) => {
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectCount, setSelectCount] = useState(1);

  const handleSwitchButton = () => {
    setIsSelectActive(!isSelectActive);
  };

  const handleSelectCount = () => {
    setSelectCount(selectCount + 1);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={globalStyle.btnContainer}>
        <SwitchButton onClick={handleSwitchButton} isActive={isSelectActive} />
        {isSelectActive && <CircleButton type='add' onClick={handleSelectCount} />}
      </div>
      <div className={style.inputsBox}>
        {Array.from({ length: selectCount }, (_, index) => (
          <SelectWithDropdown data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
