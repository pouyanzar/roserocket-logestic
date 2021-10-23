import Order from './Order';
import { Droppable } from 'react-beautiful-dnd';
export default function Orders(props) {
  const {orders} = props;

  return (
    <Droppable droppableId="unassigned">
      {(provided) => (
        <div
          ref={provided.innerRef} 
          {...provided.droppableProps}
        >
          <h2>Unassigned Orders</h2>
          <div>
            <h2>Description</h2>
            <h2>Revenue</h2>
            <h2>cost</h2>
          </div>
          { orders.map(order => <Order order={order} key={order.id}/>) }
          {provided.placeholder}
        </div>
      )}
      
    </Droppable>
    
  )
  
}