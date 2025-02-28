import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
