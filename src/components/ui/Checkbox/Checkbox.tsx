import style from "./Checkbox.module.scss";

interface ICheckbox {
  label: string;
}

const Checkbox = ({ label }: ICheckbox) => {
  return (
    <div className={style.container}>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
      <input type='checkbox' id={label} className={style.checkbox} />
    </div>
  );
};

export default Checkbox;
