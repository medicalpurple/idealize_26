import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Countdown from './components/Countdown';
import Categories from './components/Categories';
import Awards from './components/Awards';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import Memories from './components/Memories';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Countdown />
        <Categories />
        <Awards />
        <Timeline />
        <Partners />
        <Memories />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
