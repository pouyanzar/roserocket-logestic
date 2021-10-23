import Order from './Order';

//displays list of orders
export default function Orders(props) {
  const {orders} = props;

  return (
    <div>
      <h2>Orders</h2>
      <div>
        <h2>Description</h2>
        <h2>Driver</h2>
        <h2>Revenue</h2>
        <h2>cost</h2>
      </div>
      { orders.map(order => <Order order={order} key={order.id}/>) }
    </div>  
  )
}