import {useState, useEffect} from 'react';
import axios from 'axios';
import { SERVER_URL } from '../serverInfo';
import UnassignedOrders from './UnassignedOrder';
import Drivers from './Drivers';
import {DragDropContext} from 'react-beautiful-dnd';
import '../styles/Drivers/Drivers.css';

export default function DriverOrder(props) {

  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [orderChanged, setOrderChanged] = useState(false);

  useEffect(() => {
    axios.get(`${SERVER_URL}/orders/unassigned`)
    .then(data => setOrders(data.data))
    .catch(err => console.log(err)) 
  }, [orderChanged]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/drivers`)
    .then(data => setDrivers(data.data))
    .catch(err => console.log(err))
  }, []);

  //checks and renders component based on drag and droping items
  const onDragEnd = result => {
    const {destination, source, draggableId} = result;
    if (!destination) return; //when item drag and droped to the same place

    //checks if the task not be assigned to more then two drivers
    if (source.droppableId !== "unassigned" && 
        destination.droppableId !== "unassigned" &&
        destination.droppableId !== source.droppableId) {
      return alert("You have to unassign the task first!");
    }

    //assigns a order to a driver upon drag and dropping
    if (source.droppableId === "unassigned" && destination.droppableId !== source.droppableId) {
      const driverId = destination.droppableId;
      const orderId = draggableId;
      return axios.post(`${SERVER_URL}/orders/assign`, {orderId, driverId})
        .then(() => setOrderChanged(prev => !prev))
        .catch(err => console.log(err));
    }

    //unassignes the orders from drivers based on drag and drop
    if (destination.droppableId === "unassigned" && destination.droppableId !== source.droppableId) {
      const orderId = draggableId;
      return axios.post(`${SERVER_URL}/orders/unassign`, {orderId})
        .then(() => setOrderChanged(prev => !prev))
        .catch(err => console.log(err));
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="driverOrder">
        <UnassignedOrders orders={orders}/>
        <Drivers drivers={drivers} orderChanged={orderChanged}/>
      </div>
    </DragDropContext>
  )
}