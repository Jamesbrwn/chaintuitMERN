import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Auth from './pages/Auth';
import Dash from './pages/Dash';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/dash' element={<Dash />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
