import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer';
import Home from '../pages/Home';
import About from '../pages/About';
import School from '../pages/Services';
import Collaboration from '../pages/Collaboration';
import AirCommunity from '../pages/AirCommunity';
import Contact from '../pages/Contact'
import Privacy from '../pages/privacy'
import { setDevice } from '../actions';

function AppRouters() {
  const dispatch = useDispatch(); // Get the dispatch function

  useEffect(() => {
    if (window.innerWidth <= 768) {
      dispatch(setDevice("Nox"));
    } else if (window.innerWidth > 768 && window.innerWidth <= 960) {
      dispatch(setDevice("Tablet"));
    } else if (window.innerWidth > 960) {
      dispatch(setDevice("PC"));
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<School />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/community" element={<AirCommunity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouters;