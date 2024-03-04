import style from './Checkbox.module.scss';
import { RegisterCheckboxValue } from '@/services/types';
import { useContext, useEffect, useRef } from 'react';
import { ResetContext } from '@/services/context/ResetContext';
import { generateRandomBoolean } from '@/services/utils/generateRandomBoolean';

interface ICheckbox {
  label: string;
  value: RegisterCheckboxValue;
  onRegister: (values: RegisterCheckboxValue) => void;
  onGetValues: () => RegisterCheckboxValue;
}

const Checkbox = ({ label, value, onRegister, onGetValues }: ICheckbox) => {
  const { isRandomized } = useContext(ResetContext);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleSetRandomValue = (randomValue: boolean) => {
    const values = onGetValues();
    if (Array.isArray(values)) {
      if (randomValue && values && !values.includes(label)) {
        onRegister([...values, label]);
      } else if (!randomValue && values.includes(label)) {
        onRegister(values.filter((value: string) => value !== label));
      }
    } else if (typeof value === 'boolean') {
      onRegister(randomValue);
    } else {
      onRegister(!randomValue ? null : label);
      randomValue ?  checkboxRef.current?.setAttribute('checked', 'checked') : checkboxRef.current?.removeAttribute('checked');
    }
  };

  const handleOnCheck = (e: React.MouseEvent<HTMLInputElement>, label: string) => {
    const isChecked = checkboxRef.current?.hasAttribute('checked');
    isChecked ? checkboxRef.current?.removeAttribute('checked') : checkboxRef.current?.setAttribute('checked', 'checked');
    const values = onGetValues();
    if (Array.isArray(values)) {
      const updatedValues = isChecked ? [...values, label] : values.filter((value: string) => value !== label);
      onRegister(updatedValues);
    } else if (typeof value === 'boolean') {
      onRegister(!values);
    } else {
      onRegister(values === null ? label : null);
      values === null ? checkboxRef.current?.setAttribute('checked', 'checked') : checkboxRef.current?.removeAttribute('checked');
    }
  };

  useEffect(() => {
    async function updateValue() {
      if (isRandomized) {
        await onRegister(value);
        const randomBoolean = generateRandomBoolean();
        handleSetRandomValue(randomBoolean);
        if (randomBoolean) {
          checkboxRef.current?.setAttribute('checked', 'checked');
        } else {
          checkboxRef.current?.removeAttribute('checked');
        }
      }
    }
    updateValue();
  }, [isRandomized]);

  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input type="checkbox" id={label} className={style.checkbox} onClick={(e) => handleOnCheck(e, label)} ref={checkboxRef} />
    </div>
  );
};

export default Checkbox;
