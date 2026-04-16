import React from 'react';
import './Partners.css';

const Partners: React.FC = () => {
  const partnerGroups = [
    {
      type: "Gold Partner",
      partners: [{ name: "Creative Software", img: "https://idealize.aiesec.lk/partnership-logos/Creative%20Software.png" }]
    },
    {
      type: "Venue Partner",
      partners: [{ name: "Virtusa", img: "https://idealize.aiesec.lk/partnership-logos/virtusa_logo.png" }]
    },
    {
      type: "Silver Partners",
      partners: [
        { name: "Advania", img: "https://idealize.aiesec.lk/partnership-logos/Advania.jpg" },
        { name: "Asiri Construction", img: "https://idealize.aiesec.lk/partnership-logos/Asiri%20Construction.png" }
      ]
    },
    {
      type: "Technology Partners",
      partners: [
        { name: "Guardian Solutions", img: "https://idealize.aiesec.lk/partnership-logos/Guardian%20Solutions.jpg" },
        { name: "Red Line", img: "https://idealize.aiesec.lk/partnership-logos/Red%20Line.jpg" }
      ]
    }
  ];

  return (
    <section id="partners" className="partners section-padding">
      <h2 className="section-title">PARTNERS</h2>
      <p className="section-subtitle">We are proud to collaborate with these industry leaders who share our vision for fostering innovation.</p>
      
      <div className="partners-container">
        {partnerGroups.map((group, idx) => (
          <div key={idx} className="partner-group">
            <h3>{group.type}</h3>
            <div className="partner-list">
              {group.partners.map((p, i) => (
                <div key={i} className="partner-logo">
                  <img src={p.img} alt={p.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
