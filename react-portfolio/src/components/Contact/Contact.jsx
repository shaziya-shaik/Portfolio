import React from "react";

import styles from "./Contact.module.css";
import { getImageurl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageurl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ShaziyaShaik0108@gmail.com">ShaziyaShaik0108@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageurl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shaikshaziya/">linkedin.com/ShaziyaShaik</a>
        </li>
        <li className={styles.link}>
          <img src={getImageurl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/shaziya-shaik">github.com/Shaziya-shaik</a>
        </li>
      </ul>
    </footer>
  );
};
