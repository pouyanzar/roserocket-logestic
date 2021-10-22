import Order from './Order';

export default function UnassignedOrders(props) {
  const {orders} = props;
  return (
    <div>
      <h1>Unassigned Orders</h1>
      <div>
        <h2>Description</h2>
        <h2>Revenue</h2>
        <h2>cost</h2>
      </div>
      { orders.map(order => <Order order={order} /> )}
    </div>
  )
}