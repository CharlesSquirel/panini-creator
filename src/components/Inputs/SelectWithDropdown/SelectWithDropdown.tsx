import { useEffect, useRef, useState } from 'react';
import style from './SelectWithDropdown.module.scss';
import ArrowDown from '@/components/Buttons/ArrowButtons/ArrowDown';
import ArrowUp from '@/components/Buttons/ArrowButtons/ArrowUp';
import useOutsideClick from '@/services/hooks/useOutsideClick';
import { useFormContext } from 'react-hook-form';

interface ISelectDropdown {
  data: string[];
  registerId: number;
  registerName: string;
}

const SelectWithDropdown = ({ data, registerId, registerName }: ISelectDropdown) => {
  const { register, setValue } = useFormContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = data[0]
    }
  }, []);

  const handleOnClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleSetValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const elementValue = e.currentTarget.textContent;
    setValue(`${registerName}.${registerId}`, elementValue);
    if (inputRef.current && elementValue) {
      inputRef.current.value = elementValue
    }
  };

  useOutsideClick(dropdownRef, () => setIsDropdownActive(false));

  return (
    <div className={style.inputSelectBox} onClick={handleOnClick} ref={dropdownRef}>
      <input type="text" className={style.select} ref={inputRef}/>
      {isDropdownActive && (
        <ul className={style.container}>
          {data.filter(value => value !== inputRef.current?.value).map((item, index) => (
            <li key={index} {...register(`${registerName}.${registerId}`)} onClick={(e) => handleSetValue(e)}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {isDropdownActive ? <ArrowUp /> : <ArrowDown />}
    </div>
  );
};

export default SelectWithDropdown;
