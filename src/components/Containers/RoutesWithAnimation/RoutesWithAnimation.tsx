import SplashScreen from "@/components/SplashScreen/SplashScreen";
import { Route, Routes, useLocation } from "react-router";
import FormComponentProvider from "../FormComponentProvider/FormComponentProvider";
import FormContainer from "../FormContainer/FormContainer";
import CarouselInput from "@/components/Inputs/CarouselInput/CarouselInput";
import { breadVariants } from "@/data/bread";
import { cheeseVariants } from "@/data/cheese";
import { meatVariants } from "@/data/meat";
import { dressingVariants } from "@/data/dressing";
import SelectInput from "@/components/Inputs/SelectInput/SelectInput";
import VegetablesSelect from "@/components/Inputs/VegetablesSelect/VegetablesSelect";
import CheckboxInput from "@/components/Inputs/CheckboxInput/CheckboxInput";
import { eggVariants } from "@/data/egg";
import { spreadVariant } from "@/data/spread";
import { servingVariants } from "@/data/serving";
import { toppingVariant } from "@/data/topping";
import RadioInput from "@/components/Inputs/RadioInput/RadioInput";
import TextInput from "@/components/Inputs/TextInput/TextInput";
import { cutleryVarriants } from "@/data/cutlery";
import { napkinVarriants } from "@/data/napkin";
import SubmitButtonContainer from "../SubmitButtonContainer/SubmitButtonContainer";
import SubmitButton from "@/components/Buttons/SubmitButton/SubmitButton";
import TryAgainButton from "@/components/Buttons/TryAgainButton/TryAgainButton";
import { AnimationContextProvider } from "@/services/context/AnimationProvider";

const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <AnimationContextProvider>
      <Routes location={location} key={location.key}>
        <Route
          path='/'
          element={<SplashScreen title='Panini Creator' buttonText='Begin' />}
        ></Route>
        <Route
          path='/form'
          element={
            <FormComponentProvider>
              <FormContainer title='Configure Base'>
                <CarouselInput title='Bread' data={breadVariants} />
                <SelectInput title='Cheese' data={cheeseVariants} />
                <SelectInput title='Meat' data={meatVariants} />
                <CarouselInput title='Dressing' data={dressingVariants} />
                <VegetablesSelect />
              </FormContainer>
              <FormContainer title='Configure Extras'>
                <SelectInput title='Egg' data={eggVariants} />
                <CheckboxInput title='Spreads' data={spreadVariant} />
                <RadioInput title='Serving' data={servingVariants} />
                <CheckboxInput title='Topping' data={toppingVariant} />
              </FormContainer>
              <FormContainer title='Finalize Order' isLast>
                <TextInput title='Name panini' placeholder='eg. Club Panini' />
                <CheckboxInput title='Cutlery' data={cutleryVarriants} />
                <CheckboxInput title='Napkins' data={napkinVarriants} />
                <SubmitButtonContainer>
                  <SubmitButton />
                  <TryAgainButton />
                </SubmitButtonContainer>
              </FormContainer>
            </FormComponentProvider>
          }
        ></Route>
        <Route
          path='/succed'
          element={<SplashScreen title='Panini Ordered' buttonText='Start again' />}
        ></Route>
      </Routes>
    </AnimationContextProvider>
  );
};

export default RoutesWithAnimation;
