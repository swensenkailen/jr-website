import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Vlog from './components/pages/Vlog';
import Discography from './components/pages/Discography';
import Biography from './components/pages/Biography';
import Store from './components/pages/Store';
import Contact from './components/pages/Contact';
import Shows from './components/pages/Shows';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Popup from 'reactjs-popup';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/vlog' element={<Vlog/>} />
          <Route path='/discography' element={<Discography/>} />
          <Route path='/biography' element={<Biography/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/shows' element={<Shows/>} />
          <Route path='/contact' element={<Contact/>} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
