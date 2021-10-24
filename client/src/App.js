import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DriverOrder from './components/DriverOrder';
import AddDriver from './components/AddDriver';
import AddOrder from './components/AddOrder';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={DriverOrder}/>
          <Route path='/newdriver' component={AddDriver} />
          <Route path='/neworder' component={AddOrder} />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
