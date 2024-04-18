import {useContext } from "react";
import FavoriteCocktailsContext from "../context/FavoriteCocktailsContext";

function FavoriteCocktails({favCocktails}){
  const {removeFavCocktail} = useContext(FavoriteCocktailsContext);
  
  return(
    <table className="mt-4 table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Preview</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {favCocktails.map((favCocktail)=>{
          return(
            <tr key={favCocktail.idDrink}>
              <td><img src={`${favCocktail.strDrinkThumb}/preview`} className="img-thumbnail h-25 w-25" alt={favCocktail.strDrink} /></td>
              <td>{favCocktail.strDrink}</td>
              <td>{favCocktail.strCategory} {favCocktail.strAlcoholic}</td>
              <td className="text-center">
                <button type="button" className="btn btn-danger" onClick={()=>removeFavCocktail(favCocktail.idDrink)}>Remove</button>
              </td>
            </tr>);
        })}
      </tbody>
    </table>
  );
}


export default FavoriteCocktails;
