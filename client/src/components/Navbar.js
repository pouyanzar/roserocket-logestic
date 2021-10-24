import {Link} from 'react-router-dom';
import '../styles/Navbar/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/newdriver">New Driver</Link>
      <Link to="/neworder">New Order</Link>
    </div>
  )
}