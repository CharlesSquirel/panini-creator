import { useRef, useState } from "react";
import style from "./SelectWithDropdown.module.scss";
import ArrowDown from "@/components/Buttons/ArrowButtons/ArrowDown";
import ArrowUp from "@/components/Buttons/ArrowButtons/ArrowUp";
import useOutsideClick from "@/services/hooks/useOutsideClick";

interface ISelectDropdown {
  data: string[];
}

const SelectWithDropdown = ({ data }: ISelectDropdown) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleOnClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  useOutsideClick(dropdownRef, () => setIsDropdownActive(false));

  return (
    <div className={style.inputSelectBox} onClick={handleOnClick} ref={dropdownRef}>
      <input type='text' className={style.select} value={data[0]} />
      {isDropdownActive && (
        <ul className={style.container}>
          {data.slice(1).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {isDropdownActive ? <ArrowUp /> : <ArrowDown />}
    </div>
  );
};

export default SelectWithDropdown;
