import { SetStateAction } from "react";
import style from "./Checkbox.module.scss";
import { RegisterCheckboxValue } from "@/services/types";

interface ICheckbox {
  label: string;
  initialValue: RegisterCheckboxValue;
  registerName: string;
  setValue: (name: string, value: SetStateAction<RegisterCheckboxValue>) => void;
  getValues: (name: string) => any;
}

const Checkbox = ({ label, initialValue, registerName, setValue, getValues }: ICheckbox) => {
  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (Array.isArray(initialValue)) {
      const updatedValues = isChecked
        ? [...getValues(registerName), label]
        : getValues(registerName).filter((value: string) => value !== label);
      setValue(registerName, updatedValues);
    } else if (typeof initialValue === "boolean") {
      setValue(registerName, !getValues(registerName));
    } else {
      setValue(registerName, getValues(registerName) === null ? label : null);
    }
  };

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input
        type='checkbox'
        id={label}
        className={style.checkbox}
        onChange={(e) => handleOnCheck(e)}
      />
    </div>
  );
};

export default Checkbox;
