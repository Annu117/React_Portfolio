import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';  // Import animateScroll from react-scroll
import './App.css';
import  Home  from './components/home/Home';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Navbar from './components/header/Navbar';
import Preloader from "./components/header/Pre";
import ScrollToTop from "./components/header/ScrollToTop";
import Pre from "./components/header/Pre";
import Header from "./components/header/Header";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  const sections = ['home', 'services', 'skills', 'work', 'resume'];
  let currentSectionIndex = 0;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // You can adjust the offset to control when the scroll triggers the navigation
    const offset = 100;

    // Find the current section based on scroll position
    while (
      currentSectionIndex < sections.length - 1 &&
      document.getElementById(sections[currentSectionIndex + 1]).offsetTop <= scrollPosition + offset
    ) {
      currentSectionIndex++;
    }
    scroll.scrollTo({
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -offset,
      spy: true,
      to: sections[currentSectionIndex],
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <main className= 'main'>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
    </main>

    // <Router>
    //   <Preloader load={load} />
    //     <Navbar />
    //     <ScrollToTop />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/skills" element={<Skills />} />
    //       <Route path="/portfolio" element={<Portfolio />} />
    //       <Route path="/resume" element={<Resume />} />
    //       <Route path="*" element={<Navigate to="/"/>} />
    //     </Routes>
    // </Router>


    // <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/services" element={<Services />} />
    //       <Route path="/skills" element={<Skills />} />
    //       <Route path="/portfolio" element={<Portfolio />} />
    //       <Route path="/resume" element={<Resume />} />
    //     </Routes>
    //   </div>
    // </Router>
  )
}

export default App;
