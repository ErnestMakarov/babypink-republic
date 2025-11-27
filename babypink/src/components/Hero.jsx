import React from "react";

const Hero = ({ scrollToProducts }) => {
  return (
    <section className="hero">

      <div className="hero-glow glow-left"></div>
      <div className="hero-glow glow-right"></div>

      <div className="hero-wrapper">
        <h1 className="hero-title">
          The<br />
          Babypink<br />
          Republic
        </h1>

        <h2 className="hero-subtitle">
          Where softness meets confidence
        </h2>

        <button
          className="hero-btn"
          onClick={() => {
            const top = scrollToProducts?.current?.offsetTop || 0;
            window.scrollTo({ top, behavior: "smooth" });
          }}
        >
          Shop now
        </button>
      </div>

      <div className="hero-stripe">
        <div className="stripe-inner">
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
            <span>NEW COLLECTION</span>
        </div>
    </div>
    </section>
  );
};

export default Hero;
