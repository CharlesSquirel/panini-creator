import { useFormContext } from "react-hook-form";
import style from "./Checkbox.module.scss";
import { useState } from "react";

interface ICheckbox {
  label: string;
  title: string;
  registerIndex: number;
}

const Checkbox = ({ label, title, registerIndex }: ICheckbox) => {
  const { register } = useFormContext();
  const [registerName] = useState(
    label === "ADD TO ORDER" ? title : `extras.spreads.${registerIndex}`
  );
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input type='checkbox' id={label} className={style.checkbox} {...register(registerName)} />
    </div>
  );
};

export default Checkbox;
