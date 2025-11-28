import React, { useRef } from 'react';
import Hero from '../Hero';
import Products from '../Products/Products';

const Home = () => {
  const productsRef = useRef(null);

  return (
    <main className='main'>
      <Hero scrollToProducts={productsRef} />

      
      <div ref={productsRef}>
        <Products />
      </div>
    </main>
  );
};

export default Home;
