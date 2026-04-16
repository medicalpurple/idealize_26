import React from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-box">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive the latest updates about Idealize 2025.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
