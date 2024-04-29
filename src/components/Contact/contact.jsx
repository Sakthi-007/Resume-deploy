import React from "react";
import styles from './contact.module.css'
import { getImageUrl } from "../../utils";

export const Contact=()=>{
    return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:sakthisiva2004@gmail.com">sakthisiva2004@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/sakthi-vignesh-aa355a257/">linkedin.com/Sakthi Vignesh</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/Sakthi-007">github.com/Sakthi-007</a>
      </li>
    </ul>
  </footer>
)}