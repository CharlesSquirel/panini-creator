import style from "./CheckboxInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import Checkbox from "@/components/Buttons/Checkbox/Checkbox";
import { RegisterCheckboxValue } from "@/services/types";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IChecboxInput {
  title: string;
  data: string[];
}

const CheckboxInput = ({ title, data }: IChecboxInput) => {
  const { setValue, getValues } = useFormContext();
  const [registerValue, setRegisterValue] = useState<string | boolean | string[] | null>("");

  useEffect(() => {
    console.log(registerValue);
    handleRegister();
  }, [registerValue]);

  const handleRegister = () => {
    const registerName = title.toLowerCase();
    setValue(registerName, registerValue);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.checkboxContainer}>
        {data.map((spread, index) => (
          <Checkbox
            label={spread}
            key={index}
            title={title}
            registerIndex={index}
            setRegisterValue={setRegisterValue}
            registerValue={registerValue}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;
