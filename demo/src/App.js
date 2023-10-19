
import './App.css';
import "react-toastify/dist/ReactToastify.css";

import {BrowserRouter as router, Routes, BrowserRouter, Route, redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
          <Route path="/*" Component={NotFound}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
