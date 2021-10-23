import axios from 'axios';
import {useState} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { SERVER_URL } from '../serverInfo';
import EditForm from './EditForm';

//displays order details
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

  //sends a post request to update revenue and cost new values
  const submitHandler = (e,revenue, cost) => {
    
    e.preventDefault();

    axios.post(`${SERVER_URL}/orders/edit/${id}`, {revenue, cost, id})
    .then(response => console.log(response))
    .catch(err => console.log(err));
    setDisplay('flex')
    setEditor('none')
  }

  return (
    <>
      {/* makes orders item draggable */}
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
        <EditForm 
          submitHandler={submitHandler}
          editCost={editCost} 
          editRevenue={editRevenue}
          setEditCost={setEditCost}
          setEditRevenue={setEditRevenue}
        />
     </div>
    </>
  ) 
}