import React from "react";
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About=()=>{
return <section id="about" className={styles.container}>
<h1 className={styles.title}>About</h1>
<div className={styles.content}>
    {/* <img className={styles.aboutImage}src={getImageUrl("about/aboutImage.png")} alt="alt" /> */}
</div>
<ul className={styles.aboutItems}>
    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
    <div className={styles.aboutItemText}>
        <h3>FrontEnd</h3>
        <p>I am FrontEnd developer knows the basics of html, css and also React library</p>
    </div>
    </li>
    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
    <div className={styles.aboutItemText}>
        <h3>BackEnd</h3>
        <p>I am BackEnd developer has experience in working with Nodejs using express framework</p>
    </div>
    </li>
    {/* <li><img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
    <div>
        <h3>FrontEnd</h3>
        <p>I am FrontEnd developer knows the basics of html, css and also React library</p>
    </div>
    </li> */}


</ul>
</section>
}

