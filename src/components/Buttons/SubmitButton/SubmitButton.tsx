import style from "./SubmitButton.module.scss";

const SubmitButton = () => {
  return (
    <button type='submit' className={style.btn}>
      Place Order
    </button>
  );
};

export default SubmitButton;
