import { useState } from 'react';
import style from './SelectInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import SelectWithDropdown from '@/components/Inputs/SelectWithDropdown/SelectWithDropdown';
import CircleButton from '@/components/Buttons/CircleButton/CircleButton';
import SwitchButton from '@/components/Buttons/SwitchButton/SwitchButton';
import { InputComponentProps } from '@/services/types';

const SelectInput = ({ title, data }: InputComponentProps) => {
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectCount, setSelectCount] = useState(0);

  const handleSwitchButton = () => {
    setIsSelectActive(!isSelectActive);
    setSelectCount(0)
  };

  const handleSelectIncrement = () => {
    setSelectCount(selectCount + 1);
  };

  const handleSelectDecrement = () => {
    setSelectCount(selectCount - 1);
  };

  return (
    <div className={`${globalStyle.inputContainer} ${globalStyle.inputContainerSelect}`}>
      <h3 className={`${globalStyle.inputTitle} ${globalStyle.inputTitleSelect}`}>{title}</h3>
      <div className={globalStyle.buttonAndInputContainer}>
        <div className={globalStyle.buttonAndInputRow}>
          <div className={globalStyle.btnContainer}>
            <SwitchButton onClick={handleSwitchButton} isActive={isSelectActive} />
            {isSelectActive && <CircleButton type="add" onClick={handleSelectIncrement} />}
          </div>
          {isSelectActive && <SelectWithDropdown data={data} registerId={0}/>}
        </div>
        {Array.from({ length: selectCount }, (_, index) => (
          <div className={globalStyle.buttonAndInputRow} key={index}>
            <CircleButton type="remove" onClick={handleSelectDecrement} />
            <SelectWithDropdown data={data} key={index} registerId={index + 1}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
