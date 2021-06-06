import './App.css';
import ComponentC from './components/ComponentC';
import FocusInput from './components/FocusInput';
import Greet from './components/Greet';
import Ref from './components/Ref';
import { UserProvider } from './components/userContext';
import Portal from './Portal';


function App() {
  return (
    <div className="App">
     <UserProvider value="Aravind"> 
      <ComponentC/>
      </UserProvider> 
    </div>
  );
}

export default App;
