import { useContext, useEffect, useRef } from 'react';
import style from './RadioInput.module.scss';
import { ResetContext } from '@/services/context/ResetContext';
import { useFormContext } from 'react-hook-form';

interface IRadio {
  onChange: (value: string) => void;
  name: string;
  data: string;
  randomValue: string;
}

const Radio = ({ onChange, name, data, randomValue }: IRadio) => {
  const { setValue } = useFormContext();
  const { isRandomized } = useContext(ResetContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isRandomized && data === randomValue) {
      setValue(name, randomValue);
      inputRef.current?.setAttribute('checked', 'true');
    }
  }, [isRandomized, randomValue]);

  return (
    <div className={style.radioContainer}>
      <input type="radio" className={style.radio} name={name} id={data} onChange={() => onChange(data)} ref={inputRef} />
      <label htmlFor={data} className={style.label}>
        {data}
      </label>
    </div>
  );
};

export default Radio;
