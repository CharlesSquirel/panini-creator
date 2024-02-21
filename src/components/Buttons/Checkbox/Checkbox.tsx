import style from "./Checkbox.module.scss";
import { RegisterCheckboxValue } from "@/services/types";

interface ICheckbox {
  label: string;
  name?: string;
  value?: RegisterCheckboxValue;
  onChange(e: React.ChangeEvent<HTMLInputElement>, label: string): void
}

const Checkbox = ({ label, onChange }: ICheckbox) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e, label);
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
        onChange={handleChange}
      />
    </div>
  );
};

export default Checkbox;
