import { useEffect, useRef, useState } from 'react';
import style from './SelectWithDropdown.module.scss';
import ArrowDown from '@/components/Buttons/ArrowButtons/ArrowDown';
import ArrowUp from '@/components/Buttons/ArrowButtons/ArrowUp';
import useOutsideClick from '@/services/hooks/useOutsideClick';
import { useFormContext } from 'react-hook-form';

interface ISelectDropdown {
  data: string[];
}

const SelectWithDropdown = ({ data }: ISelectDropdown) => {
  const { register, setValue } = useFormContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [registerName, setRegisterName] = useState('');

  useEffect(() => {
    switch (data[0]) {
      case 'EDAM':
        setRegisterName('base.cheese');
        break;

      case 'SALAMI':
        setRegisterName('base.meat');
        break;

      case 'FRIED EGG':
        setRegisterName('base.egg');
        break;
    }
  }, []);

  const handleOnClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleSetValue = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const elementValue = e.currentTarget.textContent;
    setValue(registerName, elementValue);
  };

  useOutsideClick(dropdownRef, () => setIsDropdownActive(false));

  return (
    <div className={style.inputSelectBox} onClick={handleOnClick} ref={dropdownRef}>
      <input type="text" className={style.select} value={data[0]} />
      {isDropdownActive && (
        <ul className={style.container}>
          {data.slice(1).map((item, index) => (
            <li key={index} {...register(registerName)} onClick={(e) => handleSetValue(e)}>
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
