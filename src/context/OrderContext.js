import { createContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const makeOrder = (drink) => {
    //takes an object with {id, image,category, alcoholic, price}
    setOrders((prevState) => {
      const orderExists = prevState.filter((order) => order.id === drink.id);
      if (orderExists.length === 1) {
        console.log(`Drink has already been ordered "${drink.id}"`);
      } else {
        return [...prevState, drink];
      }
    });
  }

  const removeOrder = (drinkID) => {
    // Remove order from Orders
    setOrders((prevState) => {
      console.log(`Order for drink "${drinkID}" has been removed`);
      return prevState.filter(order => order.id !== drinkID)
    });
  }
  const ctx_values = {
    orders: orders,
    makeOrder: makeOrder,
    removeOrder: removeOrder
  }
  return (
    <OrderContext.Provider value={ctx_values}>{children}</OrderContext.Provider>
  );
}

export default OrderContext;