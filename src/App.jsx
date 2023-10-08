import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import ParallaxComponent from './components/Parallax';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <ParallaxComponent/>
    </div>
  );
}

export default App;
