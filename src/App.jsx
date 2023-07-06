import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import TermsAndConditions from './pages/TermsAndConditions';
import NFTs from './pages/NFTs';
import NFTDetail from './pages/NFTDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
    <div className="lg:pt-32 pt-24 bg-black text-[#e2e4e9] font-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/nft-detail:id" element={<NFTDetail />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
