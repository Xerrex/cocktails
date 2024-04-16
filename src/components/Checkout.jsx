import { useState, useEffect, useContext } from "react";
import OrderContext from "../context/OrderContext";

function Checkout (props){
  const {orders, removeOrder} = useContext(OrderContext);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(()=>{
    totalAmount();
  }, [orders]);

  const totalAmount = ()=>{
    let total = 0;
    orders.forEach(order=>{
      total += order.price
    })
    setTotalAmt(total)
  }

  const handleOrderRemove = (orderID)=>{
    removeOrder(orderID);
  }

  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Preview</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order)=>{
          return(
            <tr key={order.id}>
              <td><img src={order.image} className="img-thumbnail h-25 w-25" alt="cocktail drink"/></td>
              <td>{order.category} {order.alcoholic}</td>
              <td className="text-center">
                <button type="button" className="btn btn-danger" 
                  onClick={()=>handleOrderRemove(order.id)}>Remove</button>
              </td>
            </tr>);
        })}
      </tbody>
    </table>
  );
}


export default Checkout;
