import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LocationProvider from "./components/Containers/LocationProvider/LocationProvider";
import RoutesWithAnimation from "./components/Containers/RoutesWithAnimation/RoutesWithAnimation";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </BrowserRouter>
  );
};

export default App;
