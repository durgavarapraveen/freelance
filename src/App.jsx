import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Services from './components/Services';
import Tips from './components/Tips';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
    </Router>
  )
}

export default App;
