import { useState } from 'react'
import styles from './App.module.css';
import { Navbar } from './components/Navbar/navbar.jsx';
import {Hero}from "./components/Hero/Hero.jsx";
import { About } from './components/About/about.jsx';
import { Experience } from './components/Experience/experience.jsx';
import { Contact } from './components/Contact/contact.jsx';
function App() {
  return (
    
      <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
     <Experience/>
      <Contact/>
        </div>

  )
}

export default App
