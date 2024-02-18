import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import style from "./CheckboxInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import Checkbox from "@/components/Buttons/Checkbox/Checkbox";
import { RegisterCheckboxValue } from "@/services/types";

interface IChecboxInput {
  title: string;
  data: string[];
  initialValue: RegisterCheckboxValue;
  registerName: string;
}

const CheckboxInput = ({ title, data, initialValue, registerName }: IChecboxInput) => {
  const { setValue, getValues } = useFormContext();

  useEffect(() => {
    setValue(registerName, initialValue);
  }, []);

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.checkboxContainer}>
        {data.map((spread, index) => (
          <Checkbox
            label={spread}
            key={index}
            registerName={registerName}
            initialValue={initialValue}
            setValue={setValue}
            getValues={getValues}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;
