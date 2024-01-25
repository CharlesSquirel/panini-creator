import style from "./SelectInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import SelectWithDropdown from "@/components/Inputs/SelectWithDropdown/SelectWithDropdown";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import SwitchButton from "@/components/Buttons/SwitchButton/SwitchButton";
import { InputComponentProps } from "@/services/types";

const SelectInput = ({ title, data }: InputComponentProps) => {
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
