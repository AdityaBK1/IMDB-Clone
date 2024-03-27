import './App.css';
import { Link, Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
