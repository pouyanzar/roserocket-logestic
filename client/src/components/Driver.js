import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Drivers/Drivers.css';
import { Droppable, Draggable } from "react-beautiful-dnd";

export default function Driver(props) {
  const {orderChanged} = props;
  const {id, name} = props.driver;
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    axios.get(`https://roserocket-logestic-server.herokuapp.com/drivers/${id}`)
      .then(data => setOrders(() => data.data))
      .catch(err => console.log(err));
  }, [orderChanged])
  return (
    
      <div className="driver col-6">
        <h2>Driver {name}</h2>
        <Droppable droppableId={`${id.toString()}`}>
          {(provided) => (
            <div className="driver-order droppable"
              ref={provided.innerRef} 
              {...provided.droppableProps}
            >
              {
                orders.map((order, index) => (
                  <Draggable draggableId={order.id.toString()} index={index} key={index}>
                    {
                      (provided) => (
                        <div className="driver-order__item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        > 
                          <div><i className="fas fa-grip-lines"></i></div>
                          <div className="col-7">{order.description}</div>
                          <div><span>$</span>{order.revenue}</div>
                          <div><span>$</span>{order.cost}</div>
                          {provided.placeholder}
                        </div>
                      )
                    }
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
  )
}