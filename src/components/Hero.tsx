import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [consoleText, setConsoleText] = useState<string[]>([]);
  const lines = [
    "> Initialize IDEALIZE_2025...",
    "> Loading core modules...",
    "> Empowering tomorrow's tech leaders...",
    "> Innovation sequence started...",
    "> Accessing database...",
    "> Systems ready.",
    "> Welcome to Idealize 2025."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setConsoleText(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src="https://idealize.aiesec.lk/logo/logo1.png" alt="Idealize 25 Logo" />
        </div>
        <p className="hero-subtitle">
          Empowering Tomorrow's Tech Leaders: Ignite Innovation, Transform Business, Excel Together
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Register Now</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>
      
      <div className="hero-console">
        <div className="console-header">
          <div className="console-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="console-title">IDEALIZE_CONSOLE</div>
        </div>
        <div className="console-body">
          {consoleText.map((line, index) => (
            <p key={index} className="console-line">{line}</p>
          ))}
          <span className="console-cursor">_</span>
        </div>
      </div>
      
      <a href="#about" className="scroll-down">
        <span>↓</span>
      </a>
    </section>
  );
};

export default Hero;
