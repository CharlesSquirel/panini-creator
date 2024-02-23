import { useFormContext } from 'react-hook-form';
import style from './TextInput.module.scss';
import globalStyle from '@/GlobalClasses.module.scss';
import { ErrorMessage } from '@hookform/error-message';

interface ITextInput {
  title: string;
  placeholder: string;
}

const TextInput = ({ title, placeholder }: ITextInput) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${globalStyle.inputContainer} ${globalStyle.textInputContainer}`}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.inputTextContainer}>
        <label htmlFor="text" className={globalStyle.labelHidden}>
          {title}
        </label>
        <input type="text" id="text" className={style.input} placeholder={placeholder} {...register('sandwichName')} />
        <ErrorMessage
          name="sandwichName"
          errors={errors}
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

export default TextInput;
