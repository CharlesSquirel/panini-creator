import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import style from './SelectInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import SelectWithDropdown from '@/components/Inputs/SelectWithDropdown/SelectWithDropdown';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import { InputComponentProps } from '@/services/types';

const SelectInput = ({ title, data }: InputComponentProps) => {
  const { register, setValue } = useFormContext();
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectCount, setSelectCount] = useState(0);

  const handleSwitchButton = () => {
    setIsSelectActive(!isSelectActive);
  };

  const handleSelectIncrement = () => {
    setSelectCount(selectCount + 1);
  };

  const handleSelectDecrement = () => {
    setSelectCount(selectCount - 1);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.buttonAndInputContainer}>
        <div className={style.buttonAndInputRow}>
          <div className={globalStyle.btnContainer}>
            <SwitchButton onClick={handleSwitchButton} isActive={isSelectActive} />
            {isSelectActive && <CircleButton type="add" onClick={handleSelectIncrement} />}
          </div>
          <SelectWithDropdown data={data} />
        </div>
        {Array.from({ length: selectCount }, (_, index) => (
          <div className={style.buttonAndInputRow}>
            <CircleButton type="remove" onClick={handleSelectDecrement} />
            <SelectWithDropdown data={data} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
