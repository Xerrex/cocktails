import { useEffect, useState } from 'react';
import Drink from './Drink';
import Checkout from './Checkout';

function Cocktails(props){

  const [cocktails, setCocktails] = useState([]);
  const [orders, setOrders] = useState([]);
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

  const orderDrink = (drink) => {
    let myOrders = orders.slice();
    const orderExists = myOrders.filter((order)=>order.id === drink.id);

    if(orderExists.length ===1){
      console.log(`Drink has already been ordered "${drink.id}"`);
    }else{
      console.log(`Drink has been ordered "${drink.id}"`);
      myOrders.push(drink);
      setOrders(myOrders);
    }
  }

  const viewMyOrdersList = ()=>{
    setExploreCocktails(false);
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
              <button className="btn btn-secondary my-2" onClick={()=>viewMyOrdersList()}>
                View Orders <span className="badge bg-primary">{orders.length}</span>
              </button>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          { exploreCocktails ?
            (<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              { cocktails.map((cocktail) => {
                  return <Drink key={cocktail.idDrink} cocktail={cocktail} order={orderDrink}/>;
              })}
            </div>):<Checkout orders={orders}/>
          }

        </div>
      </div>

    </div>
  );

}

export default Cocktails