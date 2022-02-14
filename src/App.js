import './App.css';
import Dashboard from './Pages/Dashboard';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/Dashboard'>
          <Dashboard/>
          </Route>
          <Route exact path='/policies'>
          <Dashboard/>
          </Route>
          <Route exact path='/profile'>
          <Dashboard/>
          </Route>
          <Route exact path='/my-policies'>
          <Dashboard/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
          <Route exact path='/commission-report'>
          <Dashboard/>
          </Route>
          <Route exact path='/policy-record'>
          <Dashboard/>
          </Route>
          <Route exact path='/agent-record'>
          <Dashboard/>
          </Route>
          <Route exact path='/edit-user'>
          <Dashboard/>
          </Route>
          <Route exact path='/login'>
          <Login/>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
