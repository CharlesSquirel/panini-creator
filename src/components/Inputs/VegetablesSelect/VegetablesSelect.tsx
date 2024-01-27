import globalStyle from "@/GlobalClasses.module.scss";
import style from "./VegetablesSelect.module.scss";
import VegetableButton from "@/components/Buttons/VegetableButton/VegetableButton";
import { vegetableVariant } from "@/data/vegetable";

const VegetablesSelect = () => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>Vegetables</h3>
      <div className={style.vegContainer}>
        {vegetableVariant.map((veg, index) => (
          <VegetableButton key={index} registerIndex={index} registerValue={veg} />
        ))}
      </div>
    </div>
  );
};

export default VegetablesSelect;
