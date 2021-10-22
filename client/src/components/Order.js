export default function Order(props) {

  const {description, revenue, cost} = props.order;

  const submitHandler = (revenue, cost) => {
    if (revenue) {
      if (cost) {

      }
    }
  }

  if (revenue) {
    if (cost) {
      return (
        <div className="order">
          <div>{description}</div>
          <div><span>$</span>{revenue}</div>
          <div><span>$</span>{cost}</div>
        </div>
      )
    } 
    return (
      <div>
        <div>{description}</div>
        <div>${revenue}</div>
        <div><form onSubmit={submitHandler}><input type="text" placeholder="cost" name="cost"/></form></div>
      </div>
    )
  }
  return (
    <div>
      <div>{description}</div>
      <div><form onSubmit={submitHandler}><input type="text" placeholder="revenue" name="revenue"/></form></div>
      <div><form onSubmit={submitHandler}><input type="text" placeholder="cost" name="cost"/></form></div>
    </div>
  )
}