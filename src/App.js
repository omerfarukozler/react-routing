import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
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
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/users">Users</NavLink>
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
