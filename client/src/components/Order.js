import axios from 'axios';
import {useState} from 'react';
import { Draggable } from 'react-beautiful-dnd';

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
        <Draggable draggableId={`${id}`} index={props.index} key={props.index}>
          {
            (provided) => (
              <div className={`order d-${display}`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="col-1"><i className="fas fa-grip-lines"></i></div>
                <div className="col-5">{description}</div>
                <div><span>$</span>{editRevenue}</div>
                <div><span>$</span>{editCost}</div>
                <div><i className="fas fa-pen" onClick={editHandler}></i></div>
                {provided.placeholder}
              </div>
            )
          }   
        </Draggable>
        <div className={`order d-${editor}`}>
        <div className="ms-2 col-4">{description}</div>
        <div>
          <form onSubmit={e => submitHandler(e, editRevenue, editCost)}>
            <input 
              type="number" 
              placeholder="revenue" 
              name="revenue" 
              value={editRevenue} 
              onChange={e => setEditRevenue(e.target.value)}
              className="form-control-inline ms-4 col-3 input"
            />
            <input 
              type="number" 
              placeholder="cost" 
              name="cost" 
              value={editCost} 
              onChange={e => setEditCost(e.target.value)}
              className="form-control-inline ms-4 col-3 input"
            />
            <button type="submit" className="ms-1"><i className="fas fa-save"></i></button>
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