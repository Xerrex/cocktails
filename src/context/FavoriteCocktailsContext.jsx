import { createContext, useState } from "react";

const FavoriteCocktailsContext = createContext();


export function FavoriteCocktailsProvider({children}){

  const [favCocktails, setFavCocktails] = useState([]);

  const addFavCocktail = (cocktail)=> {
    
    // const existingCocktail = favCocktails.filter((favCocktail) => cocktail.id === favCocktail.id);

    setFavCocktails((prevFavCocktailsState)=> [...prevFavCocktailsState, cocktail]);
    
  }

  const removeFavCocktail = (cocktailID)=>{
    const filteredFavCocktails = favCocktails.filter((favCocktail) => cocktailID !== favCocktail.idDrink);
    setFavCocktails(filteredFavCocktails);
  }
  
  const ctx_values = {favCocktails, addFavCocktail, removeFavCocktail}
  
  return (
    <FavoriteCocktailsContext.Provider value={ctx_values}>{children}</FavoriteCocktailsContext.Provider>
  );
}


export default FavoriteCocktailsContext;