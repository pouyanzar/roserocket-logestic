import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Drivers/Drivers.css';

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
    <div className="driver">
      <h2>Driver {name}</h2>
      <div className="driver-order">
           
          {
            orders.map(order => (
              <div className="driver-order__item"> 
                <div>{order.description}</div>
                <div><span>$</span>{order.revenue}</div>
                <div><span>$</span>{order.cost}</div>
              </div>
            ))
          }
          
      </div>
    </div>
  )
}