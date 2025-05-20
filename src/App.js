
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Navbar from './Components/Navbar';
import QueryForm from './Pages/QueryForm';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path='/' element={<Landingpage />} />
        <Route path='/QueryForm' element={<QueryForm/>} />
        <Route path='/skills' element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;
