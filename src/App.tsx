import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import SelectInput from './components/SelectInput/SelectInput';
import CarouselInput from './components/ui/CarouselInput/CarouselInput';

const App: React.FC = () => {
  return (
    <FormContainer title="Configure Base">
      <CarouselInput title="Bread" />
      <SelectInput title="Cheese"/>
    </FormContainer>
  );
};

export default App;
