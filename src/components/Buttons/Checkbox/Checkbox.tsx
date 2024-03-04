import style from './Checkbox.module.scss';
import { RegisterCheckboxValue } from '@/services/types';
import { useContext, useEffect, useRef } from 'react';
import { ResetContext } from '@/services/context/ResetContext';
import { generateRandomBoolean } from '@/services/utils/generateRandomBoolean';

interface ICheckbox {
  label: string;
  value: RegisterCheckboxValue;
  onChange(e: React.MouseEvent<HTMLInputElement>, label: string): void;
  onRegister: (values: RegisterCheckboxValue) => void;
  onGetValues: () => RegisterCheckboxValue;
}

const Checkbox = ({ label, onChange, value, onRegister, onGetValues }: ICheckbox) => {
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
      <input type="checkbox" id={label} className={style.checkbox} onClick={(e) => onChange(e, label)} ref={checkboxRef} />
    </div>
  );
};

export default Checkbox;
