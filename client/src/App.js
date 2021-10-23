import './App.css';
import {useState, useEffect} from 'react';
import UnassignedOrders from './components/UnassignedOrder';
import Drivers from './components/Drivers';
import {DragDropContext} from 'react-beautiful-dnd';
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [orderChanged, setOrderChanged] = useState(false);

  useEffect(() => {
    axios.get('https://roserocket-logestic-server.herokuapp.com/orders/unassigned')
    .then(data => setOrders(data.data))
    .catch(err => console.log(err)) 
  }, [orderChanged]);

  useEffect(() => {
    axios.get('https://roserocket-logestic-server.herokuapp.com/drivers')
    .then(data => setDrivers(data.data))
    .catch(err => console.log(err))
  }, []);

  const onDragEnd = result => {
    const {destination, source, draggableId} = result;
    if (!destination) return;
    if (source.droppableId !== "unassigned" && 
        destination.droppableId !== "unassigned" &&
        destination.droppableId !== source.droppableId) {
      return alert("You have to unassign the task first!");
    }
    if (source.droppableId === "unassigned" && destination.droppableId !== source.droppableId) {
      const driverId = destination.droppableId;
      const orderId = draggableId;
      return axios.post('https://roserocket-logestic-server.herokuapp.com/orders/assign', {orderId, driverId})
        .then(() => setOrderChanged(prev => !prev))
        .catch(err => console.log(err));
    }
    if (destination.droppableId === "unassigned" && destination.droppableId !== source.droppableId) {
      const orderId = draggableId;
      return axios.post('https://roserocket-logestic-server.herokuapp.com/orders/unassign', {orderId})
        .then(() => setOrderChanged(prev => !prev))
        .catch(err => console.log(err));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <UnassignedOrders orders={orders}/>
        <Drivers drivers={drivers} orderChanged={orderChanged}/>
      </div>
    </DragDropContext>
  );
}

export default App;
