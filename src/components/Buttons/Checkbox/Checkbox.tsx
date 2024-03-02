import style from "./Checkbox.module.scss";
import { RegisterCheckboxValue } from "@/services/types";
import { useContext, useEffect, useRef } from "react";
import { ResetContext } from "@/services/context/ResetContext";
import { generateRandomBoolean } from "@/services/utils/generateRandomBoolean";
import { useFormContext } from "react-hook-form";

interface ICheckbox {
  label: string;
  name: string;
  value?: RegisterCheckboxValue;
  index: number;
  onChange(e: React.MouseEvent<HTMLInputElement>, label: string): void;
}

const Checkbox = ({ label, onChange, value, name, index }: ICheckbox) => {
  const { isRandomized } = useContext(ResetContext);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { setValue, getValues } = useFormContext();

  const handleSetRandomValue = (randomValue: boolean) => {
    if (Array.isArray(value)) {
      const values = getValues(name);
      if (randomValue && !values.includes(label)) {
        setValue(name, [...values, label]);
      } else if (!randomValue && values.includes(label)) {
        setValue(
          name,
          values.filter((value: string) => value !== label)
        );
      }
      // const updatedValues = randomValue
      //   ? [...getValues(name), label]
      //   : getValues(name).filter((value: string) => value !== label);

      // setValue(name, updatedValues);
    } else if (typeof value === "boolean") {
      setValue(name, randomValue);
    } else {
      setValue(name, !randomValue ? null : label);
    }
  };

  useEffect(() => {
    if (isRandomized) {
      const randomBoolean = generateRandomBoolean();
      handleSetRandomValue(randomBoolean);
      if (randomBoolean) {
        checkboxRef.current?.setAttribute("checked", "checked");
      } else {
        checkboxRef.current?.removeAttribute("checked");
      }
    }
  }, [isRandomized]);

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input
        type='checkbox'
        id={label}
        className={style.checkbox}
        onClick={(e) => onChange(e, label)}
        ref={checkboxRef}
      />
    </div>
  );
};

export default Checkbox;
