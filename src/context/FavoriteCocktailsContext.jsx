import { createContext, useState } from "react";

const FavoriteCocktailsContext = createContext();


export function FavoriteCocktailsProvider({children}){

  const [favCocktails, setFavCocktails] = useState([]);

  const addFavCocktail = (cocktail)=> {
    setFavCocktails((prevFavCocktailsState)=> [...prevFavCocktailsState, cocktail]);
  }

  const removeFavCocktail = (cocktailID)=>{
    const filteredFavCocktails = favCocktails.filter((favCocktail) => cocktailID !== favCocktail.idDrink);
    setFavCocktails(filteredFavCocktails);
  }

  const checkIfAdded = (cocktailID)=>{
    const favCocktail = favCocktails.filter((favCocktail) => cocktailID === favCocktail.idDrink);
    if (favCocktail.length === 1){
      return true;
    }else{
      return false;
    }
  }
  
  const ctx_values = {favCocktails, addFavCocktail, removeFavCocktail, checkIfAdded}
  
  return (
    <FavoriteCocktailsContext.Provider value={ctx_values}>{children}</FavoriteCocktailsContext.Provider>
  );
}


export default FavoriteCocktailsContext;