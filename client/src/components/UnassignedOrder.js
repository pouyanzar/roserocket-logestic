import Order from './Order';
import '../styles/Orders/Orders.css';

export default function UnassignedOrder(props) {
  const {orders} = props;
  return (
    <div className="orders">
      <h2 className="orders-unassigned">Unassigned Orders</h2>
      <div className="orders-title">
        <h2>Description</h2>
        <h2>Revenue</h2>
        <h2>cost</h2>
      </div>
      { orders.map(order => <Order order={order} /> )}
    </div>
  )
}