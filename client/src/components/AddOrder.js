import axios from 'axios';
import {SERVER_URL} from '../serverInfo';
import {useState} from 'react';

export default function AddOrder() {

  const [description, setDescription] = useState('');
  const [cost, setCost] = useState();
  const [revenue, setRevenue] = useState();
  

  const submitHandler = (e, description, cost, revenue) => {
    console.log(description, cost, revenue)
    e.preventDefault();

    axios.post(`${SERVER_URL}/orders/add`, {description, cost, revenue})
    .then(res => alert(res.data))
    .catch(err => console.log(err))
  }

  return (
    <>
      <h2 className="addDriver">Add a new order</h2>
      <form onSubmit={e=> submitHandler(e, description, cost, revenue)} className="addForm">
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input 
            className="form-control" 
            id="description"
            type="text" 
            name="description" 
            placeholder="description" 
            value={description}
            required 
            onChange={e => setDescription(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Cost:</label>
          <input 
            className="form-control"
            id="cost" 
            type="number" 
            name="cost" 
            placeholder="cost"
            value={cost}
            onChange={e => setCost(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="revenue">Revenue:</label>
          <input 
            className="form-control"
            id="revenue" 
            type="number" 
            name="revenue" 
            placeholder="revenue"
            value={revenue}
            onChange={e => setRevenue(e.target.value)} 
          />
        </div>
          <button className="btn btn-primary" type="submit">Add Order</button>
      </form>
    </>
  )
}