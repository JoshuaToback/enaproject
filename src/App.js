import React from 'react';
import Navbar from "./navbar";

import { Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
  <>
  <div className='App-header'>
    <h1>Test</h1>
  </div>
  <Navbar />
  <div className='container'>
    <Routes>
    </Routes>
  </div>
  <footer>
    <h4>Dveloped by Joshua Toback</h4>
  </footer>
  </>
  );
}

export default App;
