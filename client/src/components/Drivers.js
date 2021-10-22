import Driver from './Driver';
import '../styles/Drivers/Drivers.css';
export default function Drivers(props) {
  const {drivers} = props;
  
  return (
    <div className="drivers">
      {
        drivers.map(driver => <Driver driver={driver} />)
      }
    </div>
  )
}