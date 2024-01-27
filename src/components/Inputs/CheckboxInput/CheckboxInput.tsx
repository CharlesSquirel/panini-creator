import style from "./CheckboxInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import Checkbox from "@/components/Buttons/Checkbox/Checkbox";

interface IChecboxInput {
  title: string;
  data: string[];
}

const CheckboxInput = ({ title, data }: IChecboxInput) => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.checkboxContainer}>
        {data.map((spread, index) => (
          <Checkbox label={spread} key={index} title={title} registerIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;
