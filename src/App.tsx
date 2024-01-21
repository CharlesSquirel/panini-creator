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
import RadioInput from "./components/RadioInput/RadioInput";
import { servingVariants } from "./data/serving";
import { toppingVariant } from "./data/topping";
import { cutleryVarriants } from "./data/cutlery";
import { napkinVarriants } from "./data/napkin";
import TextInput from "./components/TextInput/TextInput";

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
        <CheckboxInput title='Spreads' data={spreadVariant} />
        <RadioInput title='Serving' data={servingVariants} />
        <CheckboxInput title='Topping' data={toppingVariant} />
      </FormContainer>
      <FormContainer title='Finalize Order'>
        <TextInput title='Name panini' placeholder='eg. Club Panini' />
        <CheckboxInput title='Cutlery' data={cutleryVarriants} />
        <CheckboxInput title='Napkins' data={napkinVarriants} />
      </FormContainer>
    </>
  );
};

export default App;
