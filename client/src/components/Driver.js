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

  return (
    <div className="driver col-5">
      <h2>Driver {name}</h2>
      <div className="driver-order">
           
          {
            orders.map(order => (
              <div className="driver-order__item"> 
                <div><i class="fas fa-grip-lines"></i></div>
                <div className="col-4">{order.description}</div>
                <div className="col-2"><span>$</span>{order.revenue}</div>
                <div className="col-2"><span>$</span>{order.cost}</div>
              </div>
            ))
          }
          
      </div>
    </div>
  )
}