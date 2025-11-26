import React from 'react';

const Hero = ({ scrollToProducts }) => {
  return (
    <div className="presentation">
      <h3>The <br />Babypink <br />Republic</h3>

      <button
        className="hero-btn"
        onClick={() => {
          const top = scrollToProducts?.current?.offsetTop || 0;
          window.scrollTo({
            top,
            behavior: "smooth"
          });
        }}
      >
        Shop now
      </button>

      <div className="banner_text">
        <h2>Where softness meets confidence</h2>
      </div>
    </div>
  );
};

export default Hero;
