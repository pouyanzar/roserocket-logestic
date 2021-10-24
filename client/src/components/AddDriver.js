import axios from 'axios';
import {SERVER_URL} from '../serverInfo';
import {useState} from 'react';

export default function AddDriver() {

  const [name, setName] = useState('');
  const [insurance, setInsurance] = useState('');

  const submitHandler = (e, name, insurance) => {

    e.preventDefault();

    axios.post(`${SERVER_URL}/drivers/add`, {name, insurance})
    .then(res => alert(res.data))
    .catch(err => console.log(err))
  }

  return (
    <>
      <h2 className="addDriver">Add a new driver</h2>
      <form onSubmit={e=> submitHandler(e, name, insurance)} className="addForm">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            className="form-control" 
            id="name"
            type="text" 
            name="name" 
            placeholder="name" 
            value={name} 
            required
            onChange={e => setName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Insurance:</label>
          <input 
            className="form-control"
            id="insurance" 
            type="text" 
            name="insurance" 
            placeholder="insurance"
            value={insurance}
            onChange={e => setInsurance(e.target.value)} 
          />
        </div>
          <button className="btn btn-primary" type="submit">Add Driver</button>
      </form>
    </>
  )
}