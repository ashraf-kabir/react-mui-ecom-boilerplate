import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div
      className='hero__image'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/photographer.jpg)',
      }}
    >
      <div className='hero__text'>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui</p>
      </div>
    </div>
  );
};

export default HeroSection;
