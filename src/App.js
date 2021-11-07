import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router';
import Details from './components/Details';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component ={Login}/>
        <Route exact path ="/details" component={Details}/>
        <Route exact path ="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
