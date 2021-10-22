import { useState, useEffect } from "react";
import axios from "axios";

export default function Driver(props) {

  const {id, name} = props.driver;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/drivers/${id}`)
      .then(data => setOrders(() => data.data))
      .catch(err => console.log(err));
  }, [])
  console.log(orders)
  return (
    <div>
      <h2>Driver {name}</h2>
      <div>
           
          {
            orders.map(order => (
              <> 
                <div>{order.description}</div>
                <div>{order.revenue}</div>
                <div>{order.cost}</div>
              </>
            ))
          }
          
      </div>
    </div>
  )
}