import React from 'react';
import Nav from '../../components/Navbar';
import Showcase from './Landing';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="w-full">
      <Nav />
      <Showcase />
      <Footer />
    </div>
  );
}

export default Home;
