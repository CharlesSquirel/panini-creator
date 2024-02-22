import { useState } from "react";
import globalStyle from "@/GlobalClasses.module.scss";
import SelectWithDropdown from "@/components/Inputs/SelectWithDropdown/SelectWithDropdown";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import SwitchButton from "@/components/Buttons/SwitchButton/SwitchButton";
import { useFormContext } from "react-hook-form";

interface ISelectInput {
  title: string;
  data: string[];
  name: string;
}

const SelectInput = ({ title, data, name }: ISelectInput) => {
  const { setValue, getValues, register } = useFormContext();
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectCount, setSelectCount] = useState(0);

  const handleSwitchButton = () => {
    setIsSelectActive(!isSelectActive);
    setSelectCount(0);
    if (!isSelectActive) {
      setValue(`${name}.0`, data[0]);
    } else {
      setValue(name, []);
    }
  };

  const handleSelectIncrement = () => {
    setSelectCount(selectCount + 1);
    const registeredValues = getValues(name);
    registeredValues.push(data[0]);
    setValue(name, registeredValues);
  };

  const handleSelectDecrement = () => {
    setSelectCount(selectCount - 1);
    const registeredValues = getValues(name);
    setValue(name, registeredValues.slice(0, selectCount));
  };

  return (
    <div className={`${globalStyle.inputContainer} ${globalStyle.inputContainerSelect}`}>
      <h3 className={`${globalStyle.inputTitle} ${globalStyle.inputTitleSelect}`}>{title}</h3>
      <div className={globalStyle.buttonAndInputContainer}>
        <div className={globalStyle.buttonAndInputRow}>
          <div className={globalStyle.btnContainer}>
            <SwitchButton onClick={handleSwitchButton} isActive={isSelectActive} />
            {isSelectActive && <CircleButton type='add' onClick={handleSelectIncrement} />}
          </div>
          {isSelectActive && (
            <SelectWithDropdown
              data={data}
              registerId={0}
              name={name}
              onChange={setValue}
            />
          )}
        </div>
        {Array.from({ length: selectCount }, (_, index) => (
          <div className={globalStyle.buttonAndInputRow} key={index}>
            <CircleButton type='remove' onClick={handleSelectDecrement} />
            <SelectWithDropdown
              data={data}
              key={index}
              registerId={index + 1}
              name={name}
              onChange={setValue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
