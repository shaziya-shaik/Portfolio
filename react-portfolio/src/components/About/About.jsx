import React from 'react';
import { getImageurl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageurl('about/aboutImage.png')}
          alt='Me Sitting with a laptop'
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {/* Education Details */}
          <li className={styles.aboutItem}>
           
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <a href="https://rgukt.in/" >RGUKT IIIT,Ongole</a>
                <p>B.Tech Computer Science and Engineering in 2023</p>
            </div>
          </li>

          {/* Frontend Developer */}
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>I'm Fullstack Developer</h3>
              <p>
 With expertise in React for dynamic UIs and Spring Boot for robust backend development, I integrate design and technology seamlessly. From frontend elegance using HTML, CSS, Bootstrap, and JavaScript to efficient backend systems with Spring frameworks (REST, JPA, MVC), I turn ideas into digital realities.
</p>
<p>🔌 I specialize in REST API development, MySQL, and Hibernate for seamless data management.</p>
<p>🎓 Armed with a degree in Computer Science and Engineering, I'm driven by curiosity and continuous learning, pushing boundaries every day.</p>
<p>💡 Let's collaborate and create something exceptional. Whether you're a developer, industry professional, or tech enthusiast, let's connect!</p>
            </div>
          </li>
          
        </ul>

      </div>
    </section>
  );
};
