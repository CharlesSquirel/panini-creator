import style from "./TextInput.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";

interface ITextInput {
  title: string;
  placeholder: string;
}

const TextInput = ({ title, placeholder }: ITextInput) => {
  return (
    <div className={globalStyle.inputContainer} style={{ padding: "15px 0" }}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={style.inputTextContainer}>
        <label htmlFor='text' className={globalStyle.labelHidden}>
          {title}
        </label>
        <input type='text' id='text' className={style.input} placeholder={placeholder} />
        {/* <p role='alert' className={style.errorMessage}>
          Invalid string
        </p> */}
      </div>
    </div>
  );
};

export default TextInput;
