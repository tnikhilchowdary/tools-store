
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Electricaltools from './Pages/Electricaltools';
import Automotivetools from './Pages/Automotivetools';
import Powertools from './Pages/Powertools';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/automotivetools-tools" element={<Automotivetools/>} />
      <Route path="/powertools-tools" element={<Powertools />}/>
      <Route path="/electrical-tools" element={<Electricaltools />}/>
      </Routes>
    </>
  );
}

export default App;
