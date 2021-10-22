import './App.css';
import {useState, useEffect} from 'react';
import UnassignedOrders from './components/UnassignedOrder';
import Drivers from './components/Drivers';
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState([]);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/orders/unassigned')
    .then(data => setOrders(data.data))
    .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get('http://localhost:3000/drivers')
    .then(data => setDrivers(data.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <UnassignedOrders orders={orders}/>
      <Drivers drivers={drivers} />
    </div>
  );
}

export default App;
