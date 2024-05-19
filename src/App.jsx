import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from './components/Services';
import Tips from './components/Tips';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
          <Header />
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/tips" element={<Tips />} />
             <Route path="/" element={<Home />} />
          </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
