import { SetStateAction } from "react";
import style from "./Checkbox.module.scss";

interface ICheckbox {
  label: string;
  title: string;
  setRegisterValue: React.Dispatch<SetStateAction<string | boolean | string[] | null>>;
  registerValue: string | boolean | string[] | null;
}

const Checkbox = ({ label, title, setRegisterValue, registerValue }: ICheckbox) => {
  
  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (title === "Spreads") {
      if (Array.isArray(registerValue) && isChecked) {
        setRegisterValue([...registerValue, label]);
      } 
      else if (Array.isArray(registerValue) && !isChecked) {
        const filteredRegisterValue = registerValue.filter(value => value !== label)
        setRegisterValue([...filteredRegisterValue])
      }
      else {
        setRegisterValue([label]);
      }
    } 
    else if (title === "Topping" && isChecked) {
      setRegisterValue(label);
    } 
    else if (title === "Topping" && !isChecked) {
      setRegisterValue(null)
    }
    else {
      setRegisterValue(!registerValue);
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
