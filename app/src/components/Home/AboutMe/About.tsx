import React from 'react'
import styles from './About.module.scss'

export default function About() {
  return (
    <div className={styles.aboutMe}>
      <h2>About Me</h2>
      <p>
        I’m a programmer who has been programming for five years. I’ve started
        out by creating Discord bots and later on transitioned into making
        websites, which has become my main area of expertise. I’ve worked with a
        wide range of clients and projects for other communities. I’m also a
        friendly and enjoys working with others and i’m always looking to
        improve my skills as time goes on. On a leaving note, I love coffee.{" "}
      </p>
    </div>
  );
}
