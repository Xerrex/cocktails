import './App.css';
import ExploreCocktails from './ExploreCocktails';
import { FavoriteCocktailsProvider } from '../context/FavoriteCocktailsContext';

function App() {

  return (
    <div className="App">
      <FavoriteCocktailsProvider>
        <ExploreCocktails/>
      </FavoriteCocktailsProvider>
    </div>
  );
}

export default App;
