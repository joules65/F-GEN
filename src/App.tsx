import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Documentation from './pages/Documentation';
import Contact from './pages/Contact';
import Prototype from './pages/Prototype';
import Team from './pages/Team';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App