/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/Hero.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Container from "../Layout/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <Container>
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
            <Button link={"mailto:vulpothedev@gmail.com"} text="Contact Me" />
            <Button onClick={() => alert("SOON")} text="Learn More" />
          </div>
        </div>
        <div className={styles.heroImgWrapper}>
          <Image
            src={`/images/hero/${Math.floor(Math.random() * 4) + 1}.png`}
            alt=""
            className={styles.image}
						layout="fill"
						objectFit="contain"
						priority
          />
        </div>
      </div>
    </Container>
  );
}
