import { useEffect, useState, useContext } from 'react';
import Cocktail from './Cocktail';
import alphabet_letters from '../resources/letters';
import FavoriteCocktailsContext from '../context/FavoriteCocktailsContext';
import FavoriteCocktails from './FavoriteCocktails';


function ExploreCocktails(props){

  const {favCocktails} = useContext(FavoriteCocktailsContext);
  const [cocktails, setCocktails] = useState([]);
  const [showFavCocktails, setShowFavCocktails] = useState(false);

  useEffect(()=> {
    getCocktails()
  }, [])

  const getCocktails = async (letter="a") => {
    const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="
    const api = await fetch(`${BASE_URL}${letter}`);
    const data = await api.json()
    setCocktails(data.drinks)
  }


  const onSelectLetterChange = (event)=>{
    const letter = event.target.value
    getCocktails(letter.toLowerCase());

  }

  return(
    <div className="container-fluid">
      <div className="row sticky-top  overflow-hidden bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Explore Cocktails</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">View available cocktails</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {showFavCocktails ? ( 
                <button className="btn btn-success my-2 mx-2" onClick={()=>setShowFavCocktails(false)}> 
                Explore Cocktails</button>):(
                <button className="btn btn-secondary my-2" onClick={()=>setShowFavCocktails(true)}>
                  View favorites<span className="badge bg-primary">{favCocktails.length}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        { showFavCocktails ? <FavoriteCocktails favCocktails={favCocktails} /> :(
          <div className="album py-5 bg-light mt-2">
            <div className="container">
              <div className="row g-3 my-3">
                <label htmlFor="selectCocktail" className="col">Choose Letter to show cocktails</label>
                <select className="form-select col" aria-label="Default select A" onChange={onSelectLetterChange}>
                    {alphabet_letters.map((letter)=>{
                  return<option key={letter} value={letter}>{letter}</option>
                  })}
                </select>
              </div>
              
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                { cocktails.map((cocktail) => {
                    return <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>;
                })}
              </div>

            </div>
          </div>
        )}        
      </div>
      
    </div>
  );

}

export default ExploreCocktails;