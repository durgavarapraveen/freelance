import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Components/Services";
import Tips from "./Components/Tips";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
