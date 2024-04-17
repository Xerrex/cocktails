import { createContext, useState } from "react";

const FavoriteCocktailsContext = createContext();


export function FavoriteCocktailsProvider({children}){

  const [favCocktails, setFavCocktails] = useState([]);

  const addFavCocktail = (cocktail)=> {
    
    // const existingCocktail = favCocktails.filter((favCocktail) => cocktail.id === favCocktail.id);

    setFavCocktails((prevFavCocktailsState)=> [...prevFavCocktailsState, cocktail]);
    
  }

  const removeFavCocktail = (cocktail)=>{
    const filteredFavCocktails = favCocktails.filter((favCocktail) => cocktail.id !== favCocktail.id);
    setFavCocktails(filteredFavCocktails);
  }
  
  const ctx_values = {favCocktails, addFavCocktail, removeFavCocktail}
  
  return (
    <FavoriteCocktailsContext.Provider value={ctx_values}>{children}</FavoriteCocktailsContext.Provider>
  );
}


export default FavoriteCocktailsContext;