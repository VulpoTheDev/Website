import React from "react";
import styles from "../../styles/Footer.module.scss";
import Container from "../Layout/Container";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <Container>
        <h2>Ozzy Portfolio</h2>
        <p>This is a portfolio website made with Typescript and Next.js.</p>
        <p>&copy; 2022, Jason Diaz Jimenez.</p>
    </Container>
      </div>
  );
}
