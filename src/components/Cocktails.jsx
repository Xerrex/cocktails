import { useEffect, useState, useContext } from 'react';
import Cocktail from './Cocktail';
import Checkout from './Checkout';
import alphabet_letters from '../resources/letters';
import OrderContext from '../context/OrderContext';


function Cocktails(props){

  const {orders} = useContext(OrderContext);
  const [cocktails, setCocktails] = useState([]);
  let [exploreCocktails, setExploreCocktails] = useState(true);

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
    <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Cocktails</h1>
            <p className="lead text-muted">Showing Cocktails from the letter 'A'.</p>
            <p>
              <button className="btn btn-success my-2 mx-2"
                onClick={()=> setExploreCocktails(true)}> Explore Cocktails</button>
              
              <button className="btn btn-secondary my-2" onClick={()=> setExploreCocktails(false)}>
                View favorites<span className="badge bg-primary">{orders.length}</span>
              </button>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          {exploreCocktails && 
            <div className="row g-3 my-3">
              <label htmlFor="selectCocktail" className="col">Choose Letter to show cocktails</label>
              <select className="form-select col" aria-label="Default select A" onChange={onSelectLetterChange}>
                  {alphabet_letters.map((letter)=>{
                return<option key={letter} value={letter}>{letter}</option>
                })}
              </select>
            </div>
          }
          

          { exploreCocktails ?
            (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              { cocktails.map((cocktail) => {
                  return <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>;
              })}
            </div>)
            :<Checkout/>
          }

        </div>
      </div>

    </div>
  );

}

export default Cocktails