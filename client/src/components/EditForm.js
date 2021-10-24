//displays edit form for cost and revenue
export default function EditForm(props) {
  const {submitHandler, editCost, editRevenue, setEditCost, setEditRevenue} = props;
  return (
    <div>
        <form onSubmit={e => submitHandler(e, editRevenue, editCost)}>
          <input 
            type="number" 
            placeholder="revenue" 
            name="revenue" 
            value={editRevenue} 
            onChange={e => setEditRevenue(e.target.value)}
            className="form-control-inline col-3"
          />
          <input 
            type="number" 
            placeholder="cost" 
            name="cost" 
            value={editCost} 
            onChange={e => setEditCost(e.target.value)}
            className="form-control-inline col-3"
          />
          <button type="submit"><i className="fas fa-save"></i></button>
        </form>
      </div>
  )
}