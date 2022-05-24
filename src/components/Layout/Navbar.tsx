import Link from "next/link";
import Button from "../Button/Button";
import styles from "../../styles/Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" passHref>
          <h1>OzzyTheDev</h1>
        </Link>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Works</li>
          <li>Artworks</li>
        </ul>
        <Button link="/contact" text="Contact"  />
      </div>
    </nav>
  );
}
