import { PropsWithChildren } from "react";
import style from "./SubmitButtonContainer.module.scss";

const SubmitButtonContainer = ({ children }: PropsWithChildren) => {
  return <div className={style.container}>{children}</div>;
};

export default SubmitButtonContainer;
