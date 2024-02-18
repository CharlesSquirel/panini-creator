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
import { useState } from "react";

const App: React.FC = () => {
  const [isTransitionActive, setIsTransitionActive] = useState(false);

  return (
    <>
      <SplashScreen
        title='Panini Creator'
        buttonText='Begin'
        isTransitionActive={isTransitionActive}
        setIsTransitionActive={setIsTransitionActive}
      />
      <FormComponentProvider>
        <FormContainer title='Configure Base'>
          <CarouselInput
            title='Bread'
            data={breadVariants}
            isSwitched={false}
            registerName='base.bread'
            initialValue={initialValues.base.bread}
          />
          <SelectInput title='Cheese' data={cheeseVariants} registerName='base.cheese' />
          <SelectInput title='Meat' data={meatVariants} registerName='base.meat' />
          <CarouselInput
            title='Dressing'
            data={dressingVariants}
            isSwitched
            registerName='base.dressing'
            initialValue={initialValues.base.dressing}
          />
          <VegetablesSelect />
        </FormContainer>
        <FormContainer title='Configure Extras'>
          <SelectInput title='Egg' data={eggVariants} registerName='extras.egg' />
          <CheckboxInput
            title='Spreads'
            data={spreadVariant}
            initialValue={[]}
            registerName='extras.spreads'
          />
          <RadioInput title='Serving' data={servingVariants} registerName='extras.serving' />
          <CheckboxInput
            title='Topping'
            data={toppingVariant}
            initialValue={null}
            registerName='extras.topping'
          />
        </FormContainer>
        <FormContainer title='Finalize Order' isLast>
          <TextInput title='Name panini' placeholder='eg. Club Panini' />
          <CheckboxInput
            title='Cutlery'
            data={cutleryVarriants}
            initialValue={initialValues.cutlery}
            registerName='cutlery'
          />
          <CheckboxInput
            title='Napkins'
            data={napkinVarriants}
            initialValue={initialValues.napkins}
            registerName='napkins'
          />
          <SubmitButtonContainer>
            <SubmitButton />
            <TryAgainButton />
          </SubmitButtonContainer>
        </FormContainer>
      </FormComponentProvider>
      <SplashScreen
        title='Panini Ordered'
        buttonText='Try Again'
        isTransitionActive={isTransitionActive}
        setIsTransitionActive={setIsTransitionActive}
      />
    </>
  );
};

export default App;
