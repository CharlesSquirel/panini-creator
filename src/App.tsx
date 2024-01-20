import "./App.css";
import FormContainer from "./components/FormContainer/FormContainer";
import SelectInput from "./components/SelectInput/SelectInput";
import VegetablesSelect from "./components/VegetablesSelect/VegetablesSelect";
import CarouselInput from "./components/ui/CarouselInput/CarouselInput";
import { breadVariants } from "./data/bread";
import { cheeseVariants } from "./data/cheese";
import { dressingVariants } from "./data/dressing";
import { eggVariants } from "./data/egg";
import { meatVariants } from "./data/meat";
import CheckboxInput from "./components/CheckboxInput/CheckboxInput";
import { spreadVariant } from "./data/spread";

const App: React.FC = () => {
  return (
    <>
      <FormContainer title='Configure Base'>
        <CarouselInput title='Bread' data={breadVariants} />
        <SelectInput title='Cheese' data={cheeseVariants} />
        <SelectInput title='Meat' data={meatVariants} />
        <CarouselInput title='Dressing' data={dressingVariants} />
        <VegetablesSelect />
      </FormContainer>
      <FormContainer title='Configure Extras'>
        <CarouselInput title='Egg' data={eggVariants} />
        <CheckboxInput data={spreadVariant} />
      </FormContainer>
    </>
  );
};

export default App;
