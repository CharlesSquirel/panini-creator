import style from "./SelectInput.module.scss";
import globalStyle from "../../GlobalClasses.module.scss";
import offImg from "../../assets/switch-off.svg";
import SelectWithDropdown from "../SelectWithDropdown/SelectWithDropdown";
import { cheeseVariants } from "../../../data/cheese";
import CircleButton from "../../Buttons/CircleButton/CircleButton";
import SwitchButton from "../../Buttons/SwitchButton/SwitchButton";

interface ISelectInput {
  title: string;
  data: string[];
}

const SelectInput = ({ title, data }: ISelectInput) => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={globalStyle.btnContainer}>
        <CircleButton type='add' />
        <SwitchButton />
      </div>
      <SelectWithDropdown data={data} />
    </div>
  );
};

export default SelectInput;
