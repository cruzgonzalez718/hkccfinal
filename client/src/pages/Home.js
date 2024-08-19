import React from 'react';
import '../components/Hero.css'; // Import the CSS file
import '../components/Gallery.css'; // Import the CSS file
import '../components/Footer.css'; // Import the CSS file
import Robot from '../assets/Robot.png';
import { ReactTyped } from 'react-typed';
import {
    FaFacebookSquare,
    FaYoutube,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/login');
    };

    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <p className='hero-subtitle'></p>
                <h1 className='hero-title'>HopeKCC</h1>
                <div className='hero-typed-container'>
                    <p className='hero-learn-text'>
                        Learn to code in
                    </p>
                    <ReactTyped
                        className='hero-typed'
                        strings={['HTML', 'CSS', 'Java', 'Python']}
                        typeSpeed={130}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='hero-equation'>The Right Side of the Equation.</p>
                <button className='hero-button' onClick={handleButtonClick}>
                Login
                </button>
            </div>
        </div>
    );
};



const Gallery = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/projects');
    };

    return (
        <div className='gallery-container'>
            <div className='gallery-content'>
                <img className='gallery-image' src={Robot} alt="Robot" />
                <div className='gallery-text'>
                    <p className='gallery-project-title'>PROJECT DASHBOARD</p>
                    <h1 className='gallery-title'>Student Gallery</h1>
                    <p className='gallery-description'>
                        Come see our student's gallery where all coding projects are displayed
                    </p>
                    <button className='gallery-button' onClick={handleButtonClick}>
                    See Here
                    </button>

                </div>
            </div>
        </div>
    );
};


const Footer = () => {
  return (
      <div className='footer-container'>
          <h1 className='footer-title'>HopeKCC</h1>
          <p className='footer-copyright'>
              Copyright © 2024 HopeKCC – All Rights Reserved Hopekcc Inc. I EIN: 93-4559828
          </p>
          <div className='footer-social-icons'>
              <FaFacebookSquare className='footer-icon' />
              <FaInstagram className='footer-icon' />
              <FaLinkedin className='footer-icon' />
              <FaYoutube className='footer-icon' />
          </div>
      </div>
  );
};




const Home = () => {
  return (
    <div>
        <Hero />
        <Gallery />
        <Footer />
    </div>
  );
};

export default Home;
