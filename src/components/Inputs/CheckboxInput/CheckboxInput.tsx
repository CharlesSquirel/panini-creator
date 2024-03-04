import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import style from './CheckboxInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import Checkbox from '@/components/Buttons/Checkbox/Checkbox';
import { RegisterCheckboxValue } from '@/services/types';

interface IChecboxInput {
  title: string;
  data: string[];
  value: RegisterCheckboxValue;
  name: string;
}

export type RandomValuesType = string[] | boolean | null | string;

const CheckboxInput = ({ title, data, value, name }: IChecboxInput) => {
  const { setValue, getValues } = useFormContext();

  const handleOnRegister = (values: RegisterCheckboxValue): void => {
    setValue(name, values);
  };

  const handleOnGetValues = (): RegisterCheckboxValue => {
    return getValues(name);
  };

  useEffect(() => {
    setValue(name, value);
  }, []);

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.checkboxContainer}>
        {data.map((spread, index) => (
          <Checkbox
            label={spread}
            key={index}
            value={value}
            onRegister={handleOnRegister}
            onGetValues={handleOnGetValues}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxInput;
