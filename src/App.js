import React from 'react';
import Navbar from "./navbar";

import About from "./pages/about.js"
import Cast from "./pages/cast.js"
import Contact from "./pages/contact.js"
import Crew from "./pages/crew.js"
import Game from "./pages/game.js"
import Setting from "./pages/setting.js"

import { Route, Routes } from "react-router-dom";

// eslint-disable-next-line
import styles from './App.css';

function App() {
  return (
  <>
  <div className='header'>
    <h1>Test</h1>
  </div>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route exact path="/Game" element={<Game />} />
      <Route exact path="/Cast" element={<Cast />} />
      <Route exact path="/Setting" element={<Setting />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Crew" element={<Crew />} />
      <Route exact path="/About" element={<About />} />
    </Routes>
  </div>
  <footer>
    <h4>Dveloped by enaproject</h4>
  </footer>
  </>
  );
}

export default App;
