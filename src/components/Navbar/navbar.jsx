// import React from "react";
// import styles from "./navbar.module.css"
// import { useState } from "react";
// import {getImageUrl} from '../../utils.js'
// export const Navbar=()=>{
//     const [menuOpen,setmenuOpen]=useState(false);
// return <nav className={styles.navbar}>
//     <a href="/" className={styles.title}>PortFolio</a>
//     <div className={styles.menu}>
//         <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") :getImageUrl("nav/menuIcon.png") } alt="menu-btn"
//         onClick={()=>setmenuOpen(!menuOpen)} />
//         <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
//         onClick={()=>setmenuOpen(false)}>
//             <li><a href="#about">About</a></li>
//             <li><a href="#Experience">Experience</a></li>
//             {/* <li><a href="#Projects">Projects</a></li> */}
//             <li><a href="#Contact">Contact</a></li>
            
//         </ul>
//     </div>
// </nav>
// }


import React, { useState } from 'react';
import styles from './navbar.module.css';
import { getImageUrl } from '../../utils.js';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after scrolling
    }
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        PortFolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')}
          alt="menu-btn"
          onClick={handleMenuClick}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="#" onClick={() => scrollToSection('about')}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('experience')}>
              Experience
            </a>
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};