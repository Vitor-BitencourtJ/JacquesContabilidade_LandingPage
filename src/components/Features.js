
import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div id="features" className="features-container">
      <h2>Recursos Incríveis</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Descrição da feature 1.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Descrição da feature 2.</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Descrição da feature 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
