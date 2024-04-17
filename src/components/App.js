import { useState } from 'react';
import './App.css';
import Cocktails from './Cocktails';
import { FavoriteCocktailsProvider } from '../context/FavoriteCocktailsContext';

function App() {

  return (
    <div className="App">
      <FavoriteCocktailsProvider>
        <Cocktails/>
      </FavoriteCocktailsProvider>
    </div>
  );
}

export default App;
