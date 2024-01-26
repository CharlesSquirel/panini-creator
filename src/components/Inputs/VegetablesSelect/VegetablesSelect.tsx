import { useState } from "react";
import globalStyle from "@/GlobalClasses.module.scss";
import style from "./VegetablesSelect.module.scss";
import VegetableButton from "@/components/Buttons/VegetableButton/VegetableButton";
import { vegetableVariant } from "@/data/vegetable";

const VegetablesSelect = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>Vegetables</h3>
      <div className={style.vegContainer}>
        {vegetableVariant.map((veg, index) => (
          <VegetableButton key={index} count={count} setCount={setCount}>{veg}</VegetableButton>
        ))}
      </div>
    </div>
  );
};

export default VegetablesSelect;
