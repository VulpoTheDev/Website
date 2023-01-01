import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
      <div className={styles.navbar}>
        <div className={styles.links}>
          <h1 className={styles.brand}>OzzyTheDev</h1>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Projects</li>
            <li>Fursonas</li>
          </ul>
        </div>
        <div className={styles.button}>
          <button>Contact</button>
        </div>
      </div>
  );
}
