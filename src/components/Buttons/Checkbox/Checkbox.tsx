import { SetStateAction, useEffect } from "react";
import style from "./Checkbox.module.scss";
import { RegisterCheckboxValue } from "@/services/types";

interface ICheckbox {
  label: string;
  title: string;
  registerIndex: number;
  setRegisterValue: React.Dispatch<SetStateAction<string | boolean | string[] | null>>;
  registerValue: string | boolean | string[] | null;
}

const Checkbox = ({ label, title, registerIndex, setRegisterValue, registerValue }: ICheckbox) => {
  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (title === "Spreads") {
      if (Array.isArray(registerValue)) {
        setRegisterValue([...registerValue, label]);
      } else {
        setRegisterValue([label]);
      }
    } else if (title === "Topping") {
      setRegisterValue(label);
    } else {
      setRegisterValue(true);
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
