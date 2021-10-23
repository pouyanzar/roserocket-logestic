import Order from './Order';
import '../styles/Orders/Orders.css';
import { Droppable } from 'react-beautiful-dnd';

export default function UnassignedOrder(props) {
  const {orders} = props;
  return (
    <div className="orders col-4 m-4">
      <h2 className="orders-unassigned">Unassigned Orders</h2>
      <div className="orders-title">
        <h2>Description</h2>
        <h2>Revenue</h2>
        <h2>cost</h2>
      </div>
      <Droppable droppableId="unassigned">
        {(provided) => (
          <div
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