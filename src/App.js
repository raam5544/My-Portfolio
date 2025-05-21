
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Navbar from './Components/Navbar';
import QueryForm from './Pages/QueryForm';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path='/' element={<Landingpage />} />
        <Route path='/queries' element={<QueryForm/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Portfolio/>} />
        <Route path='/contact' element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
