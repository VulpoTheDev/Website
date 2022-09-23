import Link from "next/link";
import Button from "../Button/Button";
import styles from "../../styles/Navbar.module.scss"
import Container from "./Container";

export default function Navbar() {
  return (
    <Container>
      <nav className={styles.navbar}>
        <div>
          <Link href="/" passHref>
            <h1>OzzyTheDev</h1>
          </Link>
        </div>
        <div>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/blogs">
              <li>Blog</li>
            </Link>
            <Link href="/projects">
              <li>Projects</li>
            </Link>
            <Link href="/artworks">
              <li>Artworks</li>
            </Link>
          </ul>
          <Button link="mailto:vulpothedev@gmail.com" text="Contact" />
        </div>
      </nav>
    </Container>
  );
}
