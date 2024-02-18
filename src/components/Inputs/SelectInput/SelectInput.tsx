import { useState } from "react";
import globalStyle from "@/GlobalClasses.module.scss";
import SelectWithDropdown from "@/components/Inputs/SelectWithDropdown/SelectWithDropdown";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import SwitchButton from "@/components/Buttons/SwitchButton/SwitchButton";
import { useFormContext } from "react-hook-form";

interface ISelectInput {
  title: string;
  data: string[];
  registerName: string;
}

const SelectInput = ({ title, data, registerName }: ISelectInput) => {
  const { setValue, getValues, register } = useFormContext();
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectCount, setSelectCount] = useState(0);

  const handleSwitchButton = () => {
    setIsSelectActive(!isSelectActive);
    setSelectCount(0);
    if (!isSelectActive) {
      setValue(`${registerName}.0`, data[0]);
    } else {
      setValue(registerName, []);
    }
  };

  const handleSelectIncrement = () => {
    setSelectCount(selectCount + 1);
    const registeredValues = getValues(registerName);
    registeredValues.push(data[0]);
    setValue(registerName, registeredValues);
  };

  const handleSelectDecrement = () => {
    setSelectCount(selectCount - 1);
    const registeredValues = getValues(registerName);
    setValue(registerName, registeredValues.slice(0, selectCount));
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
              registerName={registerName}
              register={register}
              setValue={setValue}
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
              registerName={registerName}
              register={register}
              setValue={setValue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
