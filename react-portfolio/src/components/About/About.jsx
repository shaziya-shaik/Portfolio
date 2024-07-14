import React from 'react'
import { getImageurl } from '../../utils'
import styles from "./About.module.css"

export const About = () => {
  return (
   
    <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
   <img 
   src={getImageurl("about/aboutImage.png")}
   alt="Me Sitting with a laptop"
   className={styles.aboutImage}
   />
   <ul className={styles.aboutItems}>
    <li className={styles.aboutItem}><img 
   src={getImageurl("about/cursorIcon.png")} alt="cursor icon"/></li>
   <div className={styles.aboutItemText}>
    <h3>Frontend Developer</h3>
    <p>I'm a Frontend Developer with experience in building responsive webpages</p>
   </div>
   <li className={styles.aboutItem}><img 
   src={getImageurl("about/serverIcon.png")} alt="server icon"/></li>
   <div className={styles.aboutItemText}>
    <h3>Backend Developer</h3>
    <p>I have  experience  developing  fast and optimised and API's</p>
   </div>
   </ul>
            </div>
</section>
  )
}
