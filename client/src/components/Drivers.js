import Driver from './Driver';

export default function Drivers(props) {
  const {drivers} = props;
  
  return (
    <div>
      {
        drivers.map(driver => <Driver driver={driver} />)
      }
    </div>
  )
}