import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'; // Add useLocation here
import './App.css';
import backgroundImage from './assets/background.jpg';
import overlayImage from './assets/robot.png';

import Home from './components/Home';
import Login from './components/Login';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to HopeKCC</h1>
        </header>
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
        <main style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/projects/:projectName" element={<ProjectDetail />} /> {/* Add this route */}
          </Routes>
          <OverlayImage />
        </main>
        <footer>
          <p>&copy; 2024 HopeKCC</p>
        </footer>
      </div>
    </Router>
  );
}

function OverlayImage() {
  const location = useLocation();
  const hideOverlay = location.pathname === '/Login' || 
  location.pathname === '/Projects' || 
  location.pathname.startsWith('/projects/'); // Hide on project detail pages


  if (hideOverlay) {
    return null;
  }

  return <img src={overlayImage} alt="Overlay" className="overlay-image" />;
}

export default App;
