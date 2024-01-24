import style from "./SelectInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import SelectWithDropdown from "@/components/Inputs/SelectWithDropdown/SelectWithDropdown";
import CircleButton from "@/components/Buttons/CircleButton/CircleButton";
import SwitchButton from "@/components/Buttons/SwitchButton/SwitchButton";

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
