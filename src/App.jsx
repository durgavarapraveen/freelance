
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from './components/Services';
import Tips from './components/Tips';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/tips" element={<Tips />} />
             <Route path="/" element={<Home />} />
          </Routes>
    </Router>
  )
}
export default App;
