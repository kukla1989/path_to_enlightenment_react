import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import lampOn from './lamp_on.jpeg';
import Footer from './Footer.js'

function App() {
  return (
    <div>
      <img id="lamp" src={lampOn} alt = 'lamp on' width="20%" />
     <button onclick="document.getElementById("lamp").src={lampOn}"> turn off </button>
      <h1> hello world, try 1 </h1> 
    <Footer />

    </div>
  );
}

export default App;
