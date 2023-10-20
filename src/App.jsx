import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import ParallaxComponent from './components/Parallax';
import Footer from "./components/Footer";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <ParallaxComponent/>
      <Footer/>
    </div>
  );
}

export default App;
