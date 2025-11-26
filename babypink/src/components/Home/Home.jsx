import React, { useRef } from 'react';
import Hero from '../Hero';
import Products from '../Products/Products';

const Home = () => {
  const productsRef = useRef(null);

  return (
    <>
      <Hero scrollToProducts={productsRef} />

      
      <div ref={productsRef}>
        <Products />
      </div>
    </>
  );
};

export default Home;
