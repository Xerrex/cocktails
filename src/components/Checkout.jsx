import { useState, useEffect } from "react";

function Checkout (props){
  const [totalAmt, setTotalAmt] = useState(0);

  const totalAmount = ()=>{
    let total = 0;
    

    props.orders.forEach(order=>{
      total += order.price
    })
    setTotalAmt(total)

  }

  useEffect(()=>{
    totalAmount();
  }, []);

  
  
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Preview</th>
          <th scope="col">Description</th>
          <th scope="col">Amount(KSH)</th>
        </tr>
      </thead>
      <tbody>
        {props.orders.map((order)=>{
          return(
            <tr key={order.id}>
              <td><img src={order.image} className="img-thumbnail h-25 w-25" alt="cocktail drink"/></td>
              <td>{order.category} {order.alcoholic}</td>
            < td>{order.price}</td>
              <th scope="row">
                <button type="button" className="btn btn-danger">Remove</button>
              </th>
            </tr>);
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2"> Total</td>
          <td>{totalAmt}</td>
          <td><button type="button" className="btn btn-info">Pay Amount</button></td>
        </tr>
      </tfoot>
    </table>
  );
}


export default Checkout;
