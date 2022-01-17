/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { Ref, useRef, useState } from "react";
import { projects, services, skills } from "../components/constants";
import Project from "../components/Project";
import { Service } from "../components/Service";
import { Skill } from "../components/Skills";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const learnMore = useRef(null);
  const contact = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: HTMLButtonElement & MouseEvent) => {
    e.preventDefault();
    // if (name === "" || email === "" || message === "") return setStatus("Please fill out all fields");
    let data = {
      name,
      email,
      message,
    };

    setStatus("Sending...");
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setStatus("Message has been sent!");
        setSubmitted(true);
      }
    });
  };

  const executeScroll = (ref: Ref<any>) =>
    // @ts-expect-error
    scrollTo({ behavior: "smooth", top: ref.current!.offsetTop });
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
            <button onClick={() => executeScroll(learnMore)}>Learn More</button>
            <button onClick={() => executeScroll(contact)}>Contact Me</button>
          </div>
        </div>
      </header>
      <section>
        <div ref={learnMore} className={styles.aboutMe}>
          <h2>About Me</h2>
          <div>
            <p>
              I{"'"}m Jason Diaz Jimenez (known online as Vulpo). I{"'"}m a High
              School Junior, Web Developer, Web Designer, Discord Bot Developer,
              and an aspiring Game Developer Below are some of my projects I
              made.
            </p>
            <div className={styles.projects}>
              {projects.map((project, index) => (
                <Project
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  github={project.github}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section}>
          <h2>My Experience</h2>
          {skills.map((skill, index) => (
            <Skill
              icon={skill.icon}
              description={skill.description}
              skill={skill.skill}
              years={skill.years}
              key={index}
            />
          ))}
        </div>
      </section>
      <section>
        <div className={styles.section}>
          <h2>My Services</h2>
          <div className={styles.services}>
            {services.map((service, index) => (
              <Service
                service={service.service}
                description={service.description}
                icon={service.icon}
                price={service.price}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.furDevs}>
          <h2>Join My Furry Programming Community</h2>
          <div className={styles.furDevsContainer}>
            <div className={styles.furDevsInfo}>
              <h3>About the Server</h3>
              <p>
                FurDevs is a Programming Community for Developers and Furries
                who are Interested in programming. No matter how experienced or
                part of the furry fandom or not, everyone is welcomed!
              </p>
              <h3>Key Features</h3>
              <p>
                - Support with many Programming Languages Like Java, Python,
                JS/TS, C# and more
              </p>
              <p>
                - Learn Programming, learn how to make a Discord Bot, Website,
                Video Gameand more!
              </p>
              <p>
                - Support in many Topics, like Game Development, Networking, OS,
                Hardware and more
              </p>
              <p>
                - Other Topics Outside of Programming such as
                Cryptocurrency/Stocks, The Furry Fandom and more!
              </p>
              <a href="https://discord.gg/SNV2N8p9aB">
                <button>Join The Community</button>
              </a>
            </div>
            <iframe
              src="https://canary.discord.com/widget?id=731520035717251142&theme=dark"
              width="350"
              height="500"
              allowtransparency={true}
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </section>
      <section ref={contact} className={styles.contactMe}>
        <h2>Contact Me (Work in progress)</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            id="message"
            required
            cols={30}
            rows={10}
          />
          <p>{status ? status : ""}</p>
          <button onClick={(e) => handleSubmit(e as any)} type="submit">
            Send
          </button>
        </form>
      </section>
      <footer className={styles.footer}>
        <div>
          <p>
            RenzoTheDev Icon made by{" "}
            <a href="https://twitter.com/AnonFurryArtist">
              Anonymous furry Artist
            </a>
          </p>
        </div>
        <div>
          <p>All Rights Reserved</p>
          <p>&copy;2021 Jason Diaz Jimenez</p>
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
        </div>
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
