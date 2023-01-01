import React from 'react'
import Layout from '../../Layout/Layout';
import Navbar from '../../Layout/Navbar';
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Layout>
        <Navbar />
        <div className={styles.heroContent}>
          <div>
            <h1>
              Hello There, I{"'"}m{" "}
              <span className={styles.underline}>Ozzy!</span>
            </h1>
            <p>An Full Stack Web Developer, Web Designer & Game Dev</p>
          </div>
          <div className={styles.icons}>
            <i className={`${styles.icon} fab fa-github`} />
            <i className={`${styles.icon} fab fa-twitter`} />
            <i className={`${styles.icon} fas fa-envelope`} />
            <i className={`${styles.icon} fab fa-instagram`} />
            <i className={`${styles.icon} fab fa-telegram`} />
          </div>
          <div className={styles.buttons}>
            <button>Learn More</button>
            <button>Contact Me</button>
          </div>
        </div>
      </Layout>
    </div>
  );
}
