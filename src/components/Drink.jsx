function Drink(props){
    const drinkID = props.cocktail.idDrink
    const image = `${props.cocktail.strDrinkThumb}/preview`;
    const category = props.cocktail.strCategory;
    const alcoholic =  props.cocktail.strAlcoholic;
    const instructions = props.cocktail.strInstructions;
    
    let ingredients = []; //{id, name}
    for(const keyV in props.cocktail){
      if(props.cocktail[keyV] != null){
        if(keyV.startsWith("strIngredient")){
          ingredients.push({
            id:keyV.charAt(keyV.length -1),
            name:props.cocktail[keyV]
          })
        }
      }
    }


    const handleOrderPlacing = ()=>{
      const drink = {
        id: drinkID,
        image: image,
        category: category,
        alcoholic: alcoholic
      }

      props.order(drink);
    }

    return(
      <div className="col">
        <div className="card">
          <img src={image} className="card-img-top" alt="cocktail drink"/>
          <div className="card-body">
            <h5 className="card-title">{category}, {alcoholic}</h5>
            <p className="card-text">{instructions}</p>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item active" aria-current="true">Ingredients</li>
            {ingredients.map((ingredient) => {
                return <li key={ingredient.id} className="list-group-item">{ingredient.name}</li>
            })}
          </ul>
          <div className="card-body">
            <button className="card-link btn btn-primary" 
                onClick={()=>handleOrderPlacing()}>Order cocktail</button>
          </div>
        </div>
      </div>
    );

}

export default Drink;