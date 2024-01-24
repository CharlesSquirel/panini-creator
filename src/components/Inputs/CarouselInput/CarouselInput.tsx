import wheatImg from "../../../assets/wheat.svg";
import ArrowBack from "../../Buttons/ArrowButtons/ArrowBack";
import ArrowButton from "../../Buttons/ArrowButtons/ArrowButton";
import ArrowNext from "../../Buttons/ArrowButtons/ArrowNext";
import style from "./CarouselInput.module.scss";
import globalStyle from "../../../GlobalClasses.module.scss";
import CircleButton from "../../Buttons/CircleButton/CircleButton";
import SwitchButton from "../../Buttons/SwitchButton/SwitchButton";

interface ICarousel {
  title: string;
  data: string[];
}

const CarouselInput = ({ title, data }: ICarousel) => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      {!data.includes("WHEAT") && (
        <div className={globalStyle.btnContainer}>
          <CircleButton type='add' />
          <SwitchButton />
        </div>
      )}
      <div className={style.selectContainer}>
        <ArrowButton>
          <ArrowBack />
        </ArrowButton>
        <p className={style.input}>
          {data.includes("WHEAT") ? <img src={wheatImg} alt='' /> : null}
          {data[0]}
        </p>
        <ArrowButton>
          <ArrowNext />
        </ArrowButton>
      </div>
    </div>
  );
};

export default CarouselInput;
