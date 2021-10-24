import Order from './Order';
import '../styles/Orders/Orders.css';
import { Droppable } from 'react-beautiful-dnd';

//displays list of unassigned orders
export default function UnassignedOrder(props) {
  const {orders} = props;

  return (
    <div className="orders">
      <h2 className="orders-unassigned">Unassigned Orders</h2>
      <div className="orders-title">
        <h2>Description</h2>
        <h2>Revenue</h2>
        <h2>cost</h2>
      </div>

      {/* makes unassigned order list to drag and droping orders */}
      <Droppable droppableId="unassigned">
        {(provided) => (
          <div
            className="droppable"
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            { orders.map((order, index) => <Order order={order} index={index}  key={index}/> )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}