import { useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import style from './RadioInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import Radio from './Radio';
import { ErrorMessage } from '@hookform/error-message';
import { ResetContext } from '@/services/context/ResetContext';
import { generateRandomFromArray } from '@/services/utils/generateRandomFromArray';

interface IRadioInput {
  title: string;
  data: string[];
  name: string;
}

const RadioInput = ({ title, data, name }: IRadioInput) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const { isRandomized } = useContext(ResetContext);
  const [randomValue, setRandomValue] = useState('');

  useEffect(() => {
    if (isRandomized) {
      setRandomValue(generateRandomFromArray(data));
    }
  }, [isRandomized]);

  const handleRadioCheck = (value: string) => {
    setValue(name, value);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.radioWithErrorContainer}>
        <div className={style.radiosContainer}>
          {data.map((data, index) => (
            <Radio key={index} data={data} name={name} onChange={handleRadioCheck} randomValue={randomValue} />
          ))}
        </div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <p role="alert" className={globalStyle.errorMessage}>
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default RadioInput;
