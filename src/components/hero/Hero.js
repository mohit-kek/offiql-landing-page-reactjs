import React from 'react';
import "./hero.css";
import logo from "../../assets/logo.png";
import heroImg from "../../assets/heroImg.png";
import Button from './button/Button';
import Container from "../container/Container"

const Hero = () => {
  return (
    <div className="hero">
      <div className='hero-logo'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="hero-btn primary">
          <button>Talk to us</button>
        </div>
      </div>

      <div className='hero-img-box'>
        <div className='hero-img-heading'>
          <p>Grow your Business with Email automation</p>
        </div>

        <div className='hero-img'>
          <img src={heroImg} alt="heroImage" />
        </div>

        <div className='hero-btn secondary'>
          <button>Get Started</button>
        </div>


        <div className="home-container">
          <Container/>
        </div>
      </div>
    </div>
  )
}

export default Hero