import React, { useState } from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How many members can be in one team?",
      a: "For the School category, teams can have 2-5 members. For the Open category, teams can have 2-5 members. All team members should be registered through the official registration form."
    },
    {
      q: "Do all team members need to be from the same university or school?",
      a: "No, team members can be from different institutions. This encourages diverse collaboration and allows you to form the best team possible regardless of institutional affiliations."
    },
    {
      q: "Do we need to have prior app and web development knowledge?",
      a: "While some basic knowledge is helpful, it's not mandatory. We provide workshops and mentoring sessions to help beginners. Teams with mixed skill levels often perform well as they combine different perspectives."
    },
    {
      q: "Are there any specific platforms or technologies that must be used?",
      a: "No, you have the freedom to choose any platform or technology stack that best suits your project. This includes web, mobile (Android/iOS), or cross-platform solutions. The focus is on innovation and solving the problem effectively."
    },
    {
      q: "Is there any registration fee?",
      a: "No, participation in Idealize 2025 is completely free of charge. We believe in providing equal opportunities for all talented individuals regardless of financial background."
    }
  ];

  return (
    <section id="faq" className="faq section-padding">
      <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-item ${activeIndex === idx ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}>
              {faq.q}
              <span className="faq-toggle">{activeIndex === idx ? '-' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
