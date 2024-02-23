import "./App.css";
import FormContainer from "@/components/Containers/FormContainer/FormContainer";
import SelectInput from "@/components/Inputs/SelectInput/SelectInput";
import VegetablesSelect from "@/components/Inputs/VegetablesSelect/VegetablesSelect";
import CarouselInput from "@/components/Inputs/CarouselInput/CarouselInput";
import { breadVariants } from "@/data/bread";
import { cheeseVariants } from "@/data/cheese";
import { dressingVariants } from "@/data/dressing";
import { eggVariants } from "@/data/egg";
import { meatVariants } from "@/data/meat";
import CheckboxInput from "@/components/Inputs/CheckboxInput/CheckboxInput";
import { spreadVariant } from "@/data/spread";
import RadioInput from "@/components/Inputs/RadioInput/RadioInput";
import { servingVariants } from "@/data/serving";
import { toppingVariant } from "@/data/topping";
import { cutleryVarriants } from "@/data/cutlery";
import { napkinVarriants } from "@/data/napkin";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import SubmitButtonContainer from "@/components/Containers/SubmitButtonContainer/SubmitButtonContainer";
import SubmitButton from "@/components/Buttons/SubmitButton/SubmitButton";
import TryAgainButton from "@/components/Buttons/TryAgainButton/TryAgainButton";
import SplashScreen from "@/components/SplashScreen/SplashScreen";
import FormComponentProvider from "./components/Containers/FormComponentProvider/FormComponentProvider";
import { initialValues } from "./services/initialValues";

const App: React.FC = () => {
  return (
    <FormComponentProvider>
      <FormContainer title='Configure Base'>
        <CarouselInput
          title='Bread'
          data={breadVariants}
          isSwitched={false}
          name='base.bread'
          initialValue={initialValues.base.bread}
        />
        <SelectInput title='Cheese' data={cheeseVariants} name='base.cheese' />
        <SelectInput title='Meat' data={meatVariants} name='base.meat' />
        <CarouselInput
          title='Dressing'
          data={dressingVariants}
          isSwitched
          name='base.dressing'
          initialValue={initialValues.base.dressing}
        />
        <VegetablesSelect />
      </FormContainer>
      <FormContainer title='Configure Extras'>
        <SelectInput title='Egg' data={eggVariants} name='extras.egg' />
        <CheckboxInput
          title='Spreads'
          data={spreadVariant}
          value={[]}
          name='extras.spreads'
        />
        <RadioInput title='Serving' data={servingVariants} name='extras.serving' />
        <CheckboxInput
          title='Topping'
          data={toppingVariant}
          value={null}
          name='extras.topping'
        />
      </FormContainer>
      <FormContainer title='Finalize Order' isLast>
        <TextInput title='Name panini' placeholder='eg. Club Panini' name="sandwichName"/>
        <CheckboxInput
          title='Cutlery'
          data={cutleryVarriants}
          value={initialValues.cutlery}
          name='cutlery'
        />
        <CheckboxInput
          title='Napkins'
          data={napkinVarriants}
          value={initialValues.napkins}
          name='napkins'
        />
        <SubmitButtonContainer>
          <SubmitButton />
          <TryAgainButton />
        </SubmitButtonContainer>
      </FormContainer>
    </FormComponentProvider>
  );
};

export default App;
