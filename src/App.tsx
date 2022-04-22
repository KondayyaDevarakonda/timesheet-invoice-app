import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavMenubar from './components/NavMenubar'

import Home from './pages/Home';
import About from './pages/About';
import Invoice from './pages/Invoice';
import Timesheet from './pages/Timesheet';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <NavMenubar />
        <Routes>
          <Route path='/' element={<Home />} />            
          <Route path='/invoice' element={<Invoice />} />    
          <Route path='/timesheet' element={<Timesheet />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App