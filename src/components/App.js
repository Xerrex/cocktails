import { useState } from 'react';
import './App.css';
import Home from './Home';
import Cocktails from './Cocktails';
import { OrderProvider } from '../context/OrderContext';

function App() {
  const [viewCocktails, setViewCocktails] = useState(false);


  const toggleViewCocktails = ()=> {setViewCocktails(!viewCocktails);}
  
  return (
    <div className="App">
      {viewCocktails ? 
        <OrderProvider><Cocktails/></OrderProvider> : 
        <Home explore={toggleViewCocktails}/>}
    </div>
  );
}

export default App;
