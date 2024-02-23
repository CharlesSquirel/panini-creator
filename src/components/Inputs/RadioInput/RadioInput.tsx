import { useFormContext } from "react-hook-form";
import style from "./RadioInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import { SandwichPayload } from "@/services/types";
import { SchemaType } from "@/services/validationSchema";

interface IRadioInput {
  title: string;
  data: string[];
  name: string;
}

const RadioInput = ({ title, data, name }: IRadioInput) => {
  const { setValue, formState: {errors} } = useFormContext();

  const handleRadioCheck = (value: string) => {
    setValue(name, value);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.radiosContainer}>
        {data.map((data, index) => (
          <div className={style.radioContainer} key={index}>
            <input
              type='radio'
              className={style.radio}
              name='radio'
              id={data}
              onChange={() => handleRadioCheck(data)}
            />
            <label htmlFor={data} className={style.label}>
              {data}
            </label>
          </div>
        ))}
        {errors.extras?.serving && <p role="alert">{errors.extras?.serving.message}</p>}
      </div>
    </div>
  );
};

export default RadioInput;
