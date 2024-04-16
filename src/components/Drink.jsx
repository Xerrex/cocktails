import { useContext } from "react";
import OrderContext from "../context/OrderContext";

function Drink(props) {
  const {makeOrder} = useContext(OrderContext);


  const drinkID = props.cocktail.idDrink;
  const image = `${props.cocktail.strDrinkThumb}/preview`;
  const category = props.cocktail.strCategory;
  const alcoholic = props.cocktail.strAlcoholic;
  const instructions = props.cocktail.strInstructions;
  const price = 200;

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

  const handleOrderPlacing = () => {
    const drink = {
      id: drinkID,
      image: image,
      category: category,
      alcoholic: alcoholic,
      price: price,
    };

    makeOrder(drink)
  };

  return (
    <div className="col">
      <div className="card">
        <img
          src={image}
          className="card-img-top w-auto h-auto"
          alt="cocktail drink"
        />
        <div className="card-body">
          <h5 className="card-title">
            {category}, {alcoholic}
          </h5>
          <p className="card-text">{instructions}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item active" aria-current="true">
            Ingredients
          </li>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient.id} className="list-group-item">
                {ingredient.name}
              </li>
            );
          })}
        </ul>
        <div className="card-body">
          <button
            className="card-link btn btn-primary"
            onClick={() => handleOrderPlacing()}
          >
            <span className="badge bg-danger mx-2">ksh {price}</span>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drink;
