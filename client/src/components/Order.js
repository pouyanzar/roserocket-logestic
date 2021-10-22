import axios from 'axios';
import {useState} from 'react';

export default function Order(props) {

  const {id, description, revenue, cost} = props.order;
  const [display, setDisplay] = useState('flex');
  const [editor, setEditor] = useState('none');
  const [editRevenue, setEditRevenue] = useState(revenue);
  const [editCost, setEditCost] = useState(cost);

  const editHandler = () => {
    setDisplay('none')
    setEditor('flex')
  }
  const submitHandler = (e,revenue, cost) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/orders/edit/${id}`, {revenue, cost, id})
    .then(response => console.log(response))
    .catch(err => console.log(err));
    setDisplay('flex')
    setEditor('none')
  }

  if (revenue && cost) {
    return (
      <>
        <div className={`order d-${display}`}>
          <div><i class="fas fa-grip-lines"></i></div>
          <div className="col-2">{description}</div>
          <div className="col-2"><span>$</span>{editRevenue}</div>
          <div className="col-2"><span>$</span>{editCost}</div>
          <div><i className="fas fa-pen" onClick={editHandler}></i></div>
        </div>
        <div className={`order d-${editor}`}>
        <div className="col-2 ms-5">{description}</div>
        <div>
          <form onSubmit={e => submitHandler(e, editRevenue, editCost)}>
            <input 
              type="text" 
              placeholder="revenue" 
              name="revenue" 
              value={editRevenue} 
              onChange={e => setEditRevenue(e.target.value)}
              className="form-control-inline me-3 ms-3 m-1 col-3"
            />
            <input 
              type="text" 
              placeholder="cost" 
              name="cost" 
              value={editCost} 
              onChange={e => setEditCost(e.target.value)}
              className="form-control-inline me-3 ms-3 m-1 col-3"
            />
            <button type="submit" className="ms-4"><i class="fas fa-save"></i></button>
          </form>
        </div>
      </div>
    </>
    )
  } 

  return (
    <div className={`order d-${editor}`}>
      <div className="col-2 ms-5">{description}</div>
      <div>
        <form onSubmit={e => submitHandler(e, editRevenue, editCost)}>
          <input 
            type="text" 
            placeholder="revenue" 
            name="revenue" 
            value={editRevenue} 
            onChange={e => setEditRevenue(e.target.value)}
            className="form-control-inline me-3 ms-3 m-1 col-3"
          />
          <input 
            type="text" 
            placeholder="cost" 
            name="cost" 
            value={editCost} 
            onChange={e => setEditCost(e.target.value)}
            className="form-control-inline me-3 ms-3 m-1 col-3"
          />
          <button type="submit" className="ms-4"><i class="fas fa-save"></i></button>
        </form>
      </div>
    </div>
  )
}