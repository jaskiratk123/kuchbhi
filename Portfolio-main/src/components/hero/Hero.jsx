import React from 'react';
import './Hero.css';
import model from '../../assets/backgrounds/7bed989693579db0204b17273f24983d.jpg';
import OpacityReveal from '../../framer/OpacityReveal';

export default function Hero() {
  return (
    <>
      <div id="hero" />
      <div className="hero-container">
        <div className="hero-wrapper">
          <img src={model} alt="blob"></img>
          <div className="hero-caption">
            <OpacityReveal>
              <span>Brewing</span>
              <br></br> <span>code</span>
              <span> potions</span>
              <br></br>
              <span> that wou</span>
              <span>ld even</span>
              <br></br> <span>imp</span>
              <span>ress </span>
              <span>Snape</span>
            </OpacityReveal>
          </div>
        </div>
      </div>
    </>
  );
}
