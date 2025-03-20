import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Documentation from '../components/Documentation';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <Documentation />
    </main>
  );
};

export default Home;