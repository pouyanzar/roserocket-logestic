import Driver from './Driver';
import '../styles/Drivers/Drivers.css';

export default function Drivers(props) {
  const {drivers, orderChanged} = props;
  return (
    <div className="drivers mt-4">
      {
        drivers.map((driver, index) => <Driver driver={driver} index={index} key={driver.id} orderChanged={orderChanged}/>)
      }
    </div>
  )
}