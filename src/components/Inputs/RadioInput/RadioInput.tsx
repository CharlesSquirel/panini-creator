import style from "./RadioInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";

interface IRadioInput {
  title: string;
  data: string[];
}

const RadioInput = ({ title, data }: IRadioInput) => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.radiosContainer}>
        {data.map((data, index) => (
          <div className={style.radioContainer} key={index}>
            <input type='radio' className={style.radio} name='radio' id={data} />
            <label htmlFor={data} className={style.label}>
              {data}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
