import React from 'react';
import './Awards.css';

const Awards: React.FC = () => {
  const mainAwards = [
    {
      title: "Idealizer - Open Category",
      img: "https://idealize.aiesec.lk/awards/1.png",
      desc: "The top award for the most innovative and well-executed project"
    },
    {
      title: "Idealizer - School Category",
      img: "https://idealize.aiesec.lk/awards/1.png",
      desc: "The top award for the most innovative and well-executed project"
    }
  ];

  const subAwards = [
    { title: "Conceptualist", img: "https://idealize.aiesec.lk/awards/2.png", desc: "For the most innovative concept" },
    { title: "Master of Models", img: "https://idealize.aiesec.lk/awards/3.png", desc: "Kaggle Winner" },
    { title: "Design Maestro Award", img: "https://idealize.aiesec.lk/awards/5.png", desc: "Best UI/UX Design" },
    { title: "AI Mastery Award", img: "https://idealize.aiesec.lk/awards/6.png", desc: "For exceptional use of AI" },
    { title: "Web App Excellence", img: "https://idealize.aiesec.lk/awards/4.png", desc: "Best Web App" }
  ];

  return (
    <section id="awards" className="awards section-padding">
      <h2 className="section-title">AWARDS</h2>
      <p className="section-subtitle">Recognizing excellence and innovation in mobile app and web development across multiple dimensions.</p>
      
      <div className="main-awards-grid">
        {mainAwards.map((award, index) => (
          <div key={index} className="award-card main">
            <div className="award-img">
              <img src={award.img} alt={award.title} />
            </div>
            <h3>{award.title}</h3>
            <p>{award.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="sub-awards-grid">
        {subAwards.map((award, index) => (
          <div key={index} className="award-card sub">
            <div className="award-img-small">
              <img src={award.img} alt={award.title} />
            </div>
            <h4>{award.title}</h4>
            <p>{award.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
