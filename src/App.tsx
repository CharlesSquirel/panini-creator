import './App.css';
import FormContainer from './components/FormContainer/FormContainer';
import CarouselInput from './components/ui/CarouselInput/CarouselInput';

const App: React.FC = () => {
  return (
    <FormContainer title="Configure Base">
      <CarouselInput title="Bread" />
    </FormContainer>
  );
};

export default App;
