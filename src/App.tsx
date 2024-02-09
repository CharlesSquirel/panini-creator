import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import FormContainer from '@/components/Containers/FormContainer/FormContainer';
import SelectInput from '@/components/Inputs/SelectInput/SelectInput';
import VegetablesSelect from '@/components/Inputs/VegetablesSelect/VegetablesSelect';
import CarouselInput from '@/components/Inputs/CarouselInput/CarouselInput';
import { breadVariants } from '@/data/bread';
import { cheeseVariants } from '@/data/cheese';
import { dressingVariants } from '@/data/dressing';
import { eggVariants } from '@/data/egg';
import { meatVariants } from '@/data/meat';
import CheckboxInput from '@/components/Inputs/CheckboxInput/CheckboxInput';
import { spreadVariant } from '@/data/spread';
import RadioInput from '@/components/Inputs/RadioInput/RadioInput';
import { servingVariants } from '@/data/serving';
import { toppingVariant } from '@/data/topping';
import { cutleryVarriants } from '@/data/cutlery';
import { napkinVarriants } from '@/data/napkin';
import TextInput from '@/components/Inputs/TextInput/TextInput';
import SubmitButtonContainer from '@/components/Containers/SubmitButtonContainer/SubmitButtonContainer';
import SubmitButton from '@/components/Buttons/SubmitButton/SubmitButton';
import TryAgainButton from '@/components/Buttons/TryAgainButton/TryAgainButton';
import SplashScreen from '@/components/SplashScreen/SplashScreen';
import FormComponentProvider from './components/Containers/FormComponentProvider/FormComponentProvider';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';

const App: React.FC = () => {
  const homePageRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter>
      <Routes>
        <TransitionGroup>
          <CSSTransition nodeRef={homePageRef}>
            <Route path="/" element={<SplashScreen title="Panini Creator" buttonText="Begin" ref={homePageRef} />}></Route>
          </CSSTransition>
        </TransitionGroup>
        <Route
          path="/form"
          element={
            <FormComponentProvider>
              <FormContainer title="Configure Base">
                <CarouselInput title="Bread" data={breadVariants} />
                <SelectInput title="Cheese" data={cheeseVariants} />
                <SelectInput title="Meat" data={meatVariants} />
                <CarouselInput title="Dressing" data={dressingVariants} />
                <VegetablesSelect />
              </FormContainer>
              <FormContainer title="Configure Extras">
                <SelectInput title="Egg" data={eggVariants} />
                <CheckboxInput title="Spreads" data={spreadVariant} />
                <RadioInput title="Serving" data={servingVariants} />
                <CheckboxInput title="Topping" data={toppingVariant} />
              </FormContainer>
              <FormContainer title="Finalize Order" isLast>
                <TextInput title="Name panini" placeholder="eg. Club Panini" />
                <CheckboxInput title="Cutlery" data={cutleryVarriants} />
                <CheckboxInput title="Napkins" data={napkinVarriants} />
                <SubmitButtonContainer>
                  <SubmitButton />
                  <TryAgainButton />
                </SubmitButtonContainer>
              </FormContainer>
            </FormComponentProvider>
          }
        ></Route>
        <Route path="/succed" element={<SplashScreen title="Panini Ordered" buttonText="Start again" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
