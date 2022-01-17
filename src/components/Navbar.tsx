import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <h1>Vulpo</h1>
      </div>
      <div className={styles.items}>
        <ul>
          <Item name="Home" href="/" />
          {/* <Item name="Projects" href="/" />
          <Item name="About Me" href="/" />
          <Item name="Blog" href="/" /> */}
        </ul>
        <button>Contact Me</button>
      </div>
    </nav>
  );
}

export function Item({ href, name }: { href: string, name: string }) {
  return (
    <>
      <Link href={href} passHref>
        <li>{name}</li>
      </Link>
    </>
  );
}
