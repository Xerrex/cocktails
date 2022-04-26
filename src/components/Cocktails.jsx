import { useEffect, useState } from 'react';
import Drink from './Drink';
import Data from './data';

function Cocktails(props){

  const [cocktails, setCocktails] = useState([]);
  let [orders, setOrders] = useState([]);

  useEffect(()=> {
    getCocktails()
  }, [])

  const getCocktails = async (letter="a") => {
    const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="
    const api = await fetch(`${BASE_URL}${letter}`);
    const data = await api.json()
    setCocktails(data.drinks)
  }

  const orderDrink = (drink) => {
    let myorders = orders.slice();
    myorders.push(drink)
    setOrders(myorders)
  }

  return(
      <div>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Coctails</h1>
            <p className="lead text-muted">Showing Cocktails from the letter 'A'.</p>
            <p>
              <button href="#" className="btn btn-secondary my-2">
                View Orders <span className="badge bg-primary">{orders.length}</span>
                </button>
            </p>
          </div>
        </div>
      </section>
      <div className="album py-5 bg-light">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        { cocktails.map((cocktail) => {
            return <Drink key={cocktail.idDrink} cocktail={cocktail} order={orderDrink}/>;
        })}
       
      </div>
    </div>
  </div>
      </div>
  );

}

export default Cocktails