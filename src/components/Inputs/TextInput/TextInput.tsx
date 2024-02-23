import { useFormContext } from "react-hook-form";
import style from "./TextInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import { ErrorMessage } from "@hookform/error-message";
import { useContext, useEffect } from "react";
import { ResetContext } from "@/services/context/ResetContext";
import { generateRandomString } from "@/services/utils/generateRandomString";

interface ITextInput {
  title: string;
  placeholder: string;
  name: string;
}

const TextInput = ({ title, placeholder, name }: ITextInput) => {
  const { isRandomized } = useContext(ResetContext);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (isRandomized) {
      const randomString = generateRandomString();
      setValue(name, randomString);
    }
  }, [isRandomized]);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={`${globalStyle.inputContainer} ${globalStyle.textInputContainer}`}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.inputTextContainer}>
        <label htmlFor='text' className={globalStyle.labelHidden}>
          {title}
        </label>
        <input
          type='text'
          id='text'
          className={style.input}
          placeholder={placeholder}
          {...register(name)}
        />
        <ErrorMessage
          name={name}
          errors={errors}
          render={({ message }) => (
            <p role='alert' className={globalStyle.errorMessage}>
              {message}
            </p>
          )}
        />
      </div>
    </div>
  );
};

export default TextInput;
