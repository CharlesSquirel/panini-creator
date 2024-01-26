import style from "./CircleButton.module.scss";
import addImg from "@/assets/add.svg";
import removeImg from "@/assets/minus.svg";
import addImgHover from "@/assets/add-hover.svg";
import removeImgHover from "@/assets/minus-hover.svg";
import { useState } from "react";

interface IAddButton {
  type: "add" | "remove";
  onClick?: () => void;
}

const CircleButton = ({ type, onClick }: IAddButton) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const getImageSource = () => {
    return isHover
      ? type === "add"
        ? addImgHover
        : removeImgHover
      : type === "add"
      ? addImg
      : removeImg;
  };

  return (
    <button
      className={style.btn}
      type='button'
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={getImageSource()} alt={type === "add" ? "Add button" : "Remove button"} />
    </button>
  );
};

export default CircleButton;
