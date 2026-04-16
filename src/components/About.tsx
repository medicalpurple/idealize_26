import React from 'react';
import './About.css';

const About: React.FC = () => {
  const features = [
    {
      title: "Learn",
      icon: "https://idealize.aiesec.lk/icons/learn.png", // Corrected icon source
      description: "Gain valuable insights from industry experts and enhance your technical skills through workshops and mentoring sessions."
    },
    {
      title: "Create",
      icon: "https://idealize.aiesec.lk/icons/create.png", // Corrected icon source
      description: "Develop innovative mobile and web applications that solve real-world business challenges and showcase your creativity."
    },
    {
      title: "Connect",
      icon: "https://idealize.aiesec.lk/icons/connect.png", // Corrected icon source
      description: "Network with like-minded individuals, potential employers, and industry leaders to expand your professional connections."
    }
  ];

  return (
    <section id="about" className="about section-padding tech-pattern">
      <h2 className="section-title">WHAT IS IDEALIZE '25?</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            IDEALIZE 2025 is an island-wide Mobile App and Web Development competition organized by AIESEC in University of Moratuwa. It gives participants the chance to develop mobile and web applications while working alongside experienced professionals.
          </p>
          <p>
            This year, IDEALIZE 2025 introduces an exciting new Kaggle competition, offering participants the chance to dive into data science and machine learning challenges. Whether you’re an experienced coder or just starting out, this is a great opportunity to apply AI and data analytics to real-world problems.
          </p>
          <p>
            The competition is open to all Sri Lankan youth, regardless of their IT knowledge. It’s an opportunity to develop ideas, gain experience, and showcase creativity.
          </p>
          <button className="btn-primary">Download Delegate Booklet</button>
        </div>
        
        <div className="about-features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
