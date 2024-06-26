import { useContext } from "react";
import FavoriteCocktailsContext from "../context/FavoriteCocktailsContext";

function Cocktail(props) {
  const {addFavCocktail, checkIfAdded} = useContext(FavoriteCocktailsContext);
  
  const cocktail = props.cocktail;
  const added = checkIfAdded(cocktail.idDrink);

  const name = cocktail.strDrink;
  const image = `${cocktail.strDrinkThumb}/preview`;
  const category = cocktail.strCategory;
  const alcoholic = cocktail.strAlcoholic;
  const instructions = cocktail.strInstructions;

  let ingredients = []; //{id, name}
  for (const keyV in props.cocktail) {
    if (props.cocktail[keyV] != null) {
      if (keyV.startsWith("strIngredient")) {
        ingredients.push({
          id: keyV.charAt(keyV.length - 1),
          name: props.cocktail[keyV],
        });
      }
    }
  }

  const handleAddToFavorites = () => {
    if (added){
      alert(`"${name}" is already added`);
    }else{
      addFavCocktail(cocktail);
    }
    
  };

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top w-auto h-auto" alt="cocktail drink" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{category}, {alcoholic}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item active" aria-current="true">Ingredients</li>
          {ingredients.map((ingredient) => {
            return (<li key={ingredient.id} className="list-group-item">{ingredient.name}</li>);
          })}
        </ul>
        <div className="card-body">
        <p className="card-text">{instructions}</p>
          <button className="card-link btn btn-primary" onClick={() => handleAddToFavorites()} >
            Add to favorites {added && <span className="badge bg-danger mx-2">Added</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;
