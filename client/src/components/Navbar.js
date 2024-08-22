import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1 className="logo">HopeKCC</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><a href="https://paypal.com" target="_blank" rel="noopener noreferrer">Donate</a></li>        
        </ul>
      
        <div onClick={handleNav} className="menu-icon">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
          <h1 className="mobile-logo">HopeKCC</h1>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={handleNav}>Home</Link></li>
            <li><Link to="/Projects" onClick={handleNav}>Projects</Link></li>
            <li><Link to="/Login" onClick={handleNav}>Login</Link></li>
            <li><Link to="/About" onClick={handleNav}>About</Link></li>
            <li>
              <a href="https://www.paypal.com/donate/?hosted_button_id=YM8LC8PLAFXA4" target="_blank" rel="noopener noreferrer" onClick={handleNav}>
              Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
