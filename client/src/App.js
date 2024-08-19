// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail'; 

function App() {
  return (
      <Router>
          <Routes>
              {/* Routes with Navbar */}
              <Route path="/" element={<><Navbar /><Home /></>} />
              <Route path="/about" element={<><Navbar /><About /></>} />
              <Route path="/login" element={<><Navbar /><Login /></>} />
              <Route path="/projects" element={<><Navbar /><Projects /></>} />
              <Route path="/projects/:projectName" element={<><Navbar /><ProjectDetail /></>} />
              
              {/* Route without Navbar */}

              {/* Unknown url */}
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
  );
}

export default App;


