
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <h1>Welcome to Tools Store</h1>
      <Routes>
      <Route path ="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
