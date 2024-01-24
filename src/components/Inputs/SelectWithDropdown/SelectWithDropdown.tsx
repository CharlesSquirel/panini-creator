import ArrowDown from "../../Buttons/ArrowButtons/ArrowDown";
import style from "./SelectWithDropdown.module.scss";

interface ISelectDropdown {
  data: string[];
}

const SelectWithDropdown = ({ data }: ISelectDropdown) => {
  return (
    <div className={style.inputSelectBox}>
      <input type='text' className={style.select} disabled value={data[0]} />
      {/* <ul className={style.container}>
        {data.slice(1).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <ArrowDown />
    </div>
  );
};

export default SelectWithDropdown;
