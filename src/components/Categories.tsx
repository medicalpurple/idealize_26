import React from 'react';
import './Categories.css';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="categories section-padding">
      <h2 className="section-title">COMPETITION CATEGORIES</h2>
      <p className="section-subtitle">Idealize 2025 offers two distinct categories to ensure everyone has the opportunity to participate and showcase their talents.</p>
      
      <div className="categories-grid">
        <div className="category-card">
          <div className="category-img">
            <img src="https://idealize.aiesec.lk/category/school.png" alt="School Category" />
          </div>
          <div className="category-content">
            <h3>School Category</h3>
            <p>For school students, nurturing young talent in mobile and web app development innovation.</p>
            <ul>
              <li>Open to all school students in Sri Lanka</li>
              <li>Teams of 2-5 members allowed</li>
              <li>Special mentoring sessions provided</li>
              <li>Dedicated workshops for beginners</li>
            </ul>
          </div>
        </div>
        
        <div className="category-card">
          <div className="category-img">
            <img src="https://idealize.aiesec.lk/category/open.png" alt="Open Category" />
          </div>
          <div className="category-content">
            <h3>Open Category</h3>
            <p>Inviting all tech enthusiasts, regardless of age or expertise, to showcase their innovation in app development.</p>
            <ul>
              <li>Open to all undergraduates and tech enthusiasts</li>
              <li>Teams of 2-5 members allowed</li>
              <li>Advanced technical challenges</li>
              <li>Industry expert mentoring and networking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
