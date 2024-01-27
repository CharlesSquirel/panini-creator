import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import globalStyle from "@/GlobalClasses.module.scss";
import style from "./VegetablesSelect.module.scss";
import VegetableButton from "@/components/Buttons/VegetableButton/VegetableButton";
import { vegetableVariant } from "@/data/vegetable";

const VegetablesSelect = () => {
  const { setValue } = useFormContext();
  const [vegetablesValues, setVegetablesValues] = useState<string[]>([]);

  useEffect(() => {
    handleRegister();
  }, [vegetablesValues]);

  const handleRegister = () => {
    setValue("vegetables", vegetablesValues);
  };

  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>Vegetables</h3>
      <div className={style.vegContainer}>
        {vegetableVariant.map((veg, index) => (
          <VegetableButton
            key={index}
            registerValue={veg}
            handleRegister={handleRegister}
            vegetablesValues={vegetablesValues}
            setVegetablesValues={setVegetablesValues}
          />
        ))}
      </div>
    </div>
  );
};

export default VegetablesSelect;
