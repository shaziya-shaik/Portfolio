import React from 'react'
import { getImageurl } from '../../utils'
import styles from './Hero.module.css'


export const Hero = () => {
  return (
        <section className={styles.container}>
            <div className={styles.content}>
                <hi className={styles.title}>Hi ,I'm Shaziya </hi>
            <p className={styles.description}>I'm a full stack developer handson Experience with React , Spring boot ,Java</p>
            <a href="mailto:shaziyashaik0108@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageurl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topblur}></div>
            <div className={styles.bottomblur}></div>
        </section>
  )
}
