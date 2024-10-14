import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/users' Component={Users}/>
        <Route path='/user/:id' Component={User}/>
        </Routes>
      </div>
    </Router>
  );
}



export default App;
