import { useState } from 'react';
import './App.css';
import Home from './Home';
import Cocktails from './Cocktails';

function App() {
  const [cocktails, setCocktails] = useState(false);


  const toggleCocktails = ()=> {setCocktails(!cocktails);}
  
  return (
    <div className="App">
      {cocktails ? <Cocktails/> : <Home explore={toggleCocktails}/>}
      
    </div>
  );
}

export default App;
