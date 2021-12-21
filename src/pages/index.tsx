/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <div className={styles.image}>
          <img src="/images/vulpo.png" alt="" />
        </div>
        <div className={styles.heading}>
          <h1>Hewwo There! I{"'"}m Vulpo</h1>
          <p>
            Full Stack Web Developer (JS) | Discord Bot Dev | Aspiring Game Dev
            | Web Designer
          </p>
          <div className={styles.icons}>
            <Icon name="telegram" link="https://t.me/developervulpo" />
            <Icon name="discord" link="https://discord.gg/DpacxTDDm8" />
            <Icon
              name="instagram"
              link="https://www.instagram.com/developer_vulpo/"
            />
            <Icon name="github" link="https://github.com/VulpoTheDev" />
            <Icon name="twitter" link="https://twitter.com/VulpoTheDev" />
            <Icon
              name="youtube"
              link="https://www.youtube.com/channel/UCYYoRyhnIu_-465PKVWG8dg"
            />
            <Icon
              name="steam"
              link="https://steamcommunity.com/profiles/76561199158934337"
            />
          </div>
          <div className={styles.buttons}>
            <button>Learn More</button>
            <button>Projects</button>
            <button>Blogs</button>
            <button>My Communites</button>
          </div>
        </div>
      </header>
      <footer className={styles.footer}>
        <p>
          Artwork made by{" "}
          <a href="https://twitter.com/AnonFurryArtist">
            Anonymous furry Artist
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;

export function Icon({ name, link }: { name: string; link: string }) {
  return (
    <>
      <a href={link} className={styles.icon}>
        <i className={`fab fa-${name}`} />
      </a>
    </>
  );
}
