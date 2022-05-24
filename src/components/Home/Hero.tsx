/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Hero.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.greetings}>
        <h1 className={styles.headingText}>Hewwo There! I{"’"}m Ozzy</h1>
        <h2 className={styles.headingSub}>
          I’m a Full Stack Web Developer, Discord Bot Dev, High School Senior
          and Certified Coffee Addict.
        </h2>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faGithub} size={"2x"} />
          <FontAwesomeIcon icon={faDiscord} size={"2x"} />
          <FontAwesomeIcon icon={faInstagram} size={"2x"} />
          <FontAwesomeIcon icon={faTelegram} size={"2x"} />
        </div>
        <div className={styles.buttons}>
          <Button link="/contact" text="Contact Me" />
          <Button link="/contact" text="Learn More" />
        </div>
      </div>
      <img src="/images/ozzy_sample.jpeg" alt="" className={styles.image} />
    </div>
  );
}
