import style from "./VegetablesSelect.module.scss";
import globalStyle from "@/GlobalClasses.module.scss";
import { vegetableVariant } from "@/data/vegetable";
import VegetableButton from "@/components/Buttons/VegetableButton/VegetableButton";

const VegetablesSelect = () => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>Vegetables</h3>
      <div className={style.vegContainer}>
        {vegetableVariant.map((veg, index) => (
          <VegetableButton key={index}>{veg}</VegetableButton>
        ))}
      </div>
    </div>
  );
};

export default VegetablesSelect;
