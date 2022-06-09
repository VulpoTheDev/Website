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
          <li onClick={() => alert("Lazyiness <3")}>Home</li>
          <li onClick={() => alert("Lazyiness <3")}>Blog</li>
          <li onClick={() => alert("Lazyiness <3")}>Projects</li>
          <li onClick={() => alert("Lazyiness <3")}>Artworks</li>
        </ul>
        <Button link="mailto:vulpothedev@gmail.com" text="Contact"  />
      </div>
    </nav>
    </Container>
  );
}
