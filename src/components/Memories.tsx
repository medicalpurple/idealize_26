import React from 'react';
import './Memories.css';

const Memories: React.FC = () => {
  const photos = [
    { src: "https://idealize.aiesec.lk/showcasting2/481202824_609035338663981_5143259098846916387_n.jpg", alt: "Award Ceremony" },
    { src: "https://idealize.aiesec.lk/showcasting2/481906034_609036478663867_290733307689999923_n.jpg", alt: "Participants working" },
    { src: "https://idealize.aiesec.lk/showcasting2/481906182_609035345330647_7384667570446697630_n.jpg", alt: "Final presentations" },
    { src: "https://idealize.aiesec.lk/showcasting2/481155173_609035578663957_1752763370933576784_n.jpg", alt: "Networking" },
    { src: "https://idealize.aiesec.lk/showcasting2/481989843_609035358663979_4490012234730530804_n.jpg", alt: "Award Ceremony 2" },
    { src: "https://idealize.aiesec.lk/showcasting2/481203754_609036785330503_1015480564810824351_n.jpg", alt: "Working session" }
  ];

  return (
    <section id="memories" className="memories section-padding tech-pattern">
      <h2 className="section-title">OUR MEMORIES</h2>
      <p className="section-subtitle">Relive the exciting moments from previous Idealize events that have inspired innovation and collaboration.</p>
      
      <div className="gallery-grid">
        {photos.map((photo, idx) => (
          <div key={idx} className="gallery-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
      
      <div className="aftermovie">
        <h3>Idealize 2024 Aftermovie</h3>
        <div className="video-container">
          <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder
            title="Idealize 2024 Aftermovie"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Memories;
