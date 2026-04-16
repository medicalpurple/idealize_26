import React from 'react';
import './Timeline.css';

const Timeline: React.FC = () => {
  const events = [
    { num: 1, title: "Registration Opens", date: "April 17 - May 7, 2024", desc: "Teams can register online through the website" },
    { num: 2, title: "Proposal Submission", date: "May 15 - May 22, 2024", desc: "Teams submit their project proposals" },
    { num: 3, title: "Kaggle Competition", date: "July 3 - July 15, 2024", desc: "Teams compete in a Kaggle competition to showcase AI solutions" },
    { num: 4, title: "Prototype Submission", date: "June 8 - July 23, 2024", desc: "Teams submit their prototypes for evaluation" },
    { num: 5, title: "Goto Market Phase", date: "August 7 - August 17, 2024", desc: "Teams need to deploy/launch their product" },
    { num: 6, title: "Semi Finals", date: "August 29 - August 30, 2024", desc: "Semi Finals" },
    { num: 7, title: "Finals", date: "September 13, 2024", desc: "Finals" }
  ];

  return (
    <section id="timeline" className="timeline section-padding tech-pattern">
      <h2 className="section-title">COMPETITION TIMELINE</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-num">{event.num}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p className="timeline-date">{event.date}</p>
              <p className="timeline-desc">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
