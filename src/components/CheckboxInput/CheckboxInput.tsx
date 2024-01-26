import style from "./CheckboxInput.module.scss";
import globalStyle from "../../GlobalClasses.module.scss";
import { spreadVariant } from "../../data/spread";
import Checkbox from "../ui/Checkbox/Checkbox";

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
          <Checkbox label={spread} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;