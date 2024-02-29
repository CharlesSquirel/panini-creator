import { useContext, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import style from './CheckboxInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import Checkbox from '@/components/Buttons/Checkbox/Checkbox';
import { RegisterCheckboxValue } from '@/services/types';
import { generateRandomFromArray } from '@/services/utils/generateRandomFromArray';
import { ResetContext } from '@/services/context/ResetContext';
import { generateRandomBoolean } from '@/services/utils/generateRandomBoolean';
import { generateRandomBooleanOrNull } from '@/services/utils/generateRandomBooleanOrNull';

interface IChecboxInput {
  title: string;
  data: string[];
  value: RegisterCheckboxValue;
  name: string;
}

const CheckboxInput = ({ title, data, value, name }: IChecboxInput) => {
  const { setValue, getValues } = useFormContext();
  const { isRandomized } = useContext(ResetContext);

  const handleRandomCheckbox = () => {
    if (Array.isArray(value)) {
      const randomValues = generateRandomFromArray(data, { many: true });
      setValue(name, randomValues);
    } else if (typeof value === 'boolean') {
      const randomValue = generateRandomBoolean();
      setValue(name, randomValue);
    } else {
      const randomValue = generateRandomBooleanOrNull();
      setValue(name, randomValue);
    }
  };

  const handleOnCheck = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const isChecked = e.currentTarget.checked;
    if (Array.isArray(value)) {
      const updatedValues = isChecked ? [...getValues(name), label] : getValues(name).filter((value: string) => value !== label);
      setValue(name, updatedValues);
    } else if (typeof value === 'boolean') {
      setValue(name, !getValues(name));
    } else {
      setValue(name, getValues(name) === null ? label : null);
    }
  };

  useEffect(() => {
    if (isRandomized) {
      handleRandomCheckbox();
    } else {
      setValue(name, value);
    }
  }, [isRandomized]);

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.checkboxContainer}>
        {data.map((spread, index) => (
          <Checkbox label={spread} key={index} name={name} value={value} onChange={(e) => handleOnCheck(e, spread)} />
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;
