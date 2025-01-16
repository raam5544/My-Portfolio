
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path='/' element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;
