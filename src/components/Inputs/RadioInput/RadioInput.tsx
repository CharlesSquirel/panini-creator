import { useFormContext } from 'react-hook-form';
import style from './RadioInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import { ErrorMessage } from '@hookform/error-message';

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

  const handleRadioCheck = (value: string) => {
    setValue(name, value);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.radioWithErrorContainer}>
        <div className={style.radiosContainer}>
          {data.map((data, index) => (
            <div className={style.radioContainer} key={index}>
              <input type="radio" className={style.radio} name={name} id={data} onChange={() => handleRadioCheck(data)} />
              <label htmlFor={data} className={style.label}>
                {data}
              </label>
            </div>
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
