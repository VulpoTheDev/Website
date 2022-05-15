/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Project from "../components/Project";
import Social from "../components/Social";

export default function Home() {
    return (
        <div>
            <div className={styles.heading}>
                <img src="/images/vulpo.png" alt="Vulpo's PFP" className={`${styles.icon} fadeIn`} />
                <div>
                    <h1>Hi There, I{"'"}m Vulpo</h1>
                    <p>A High School Junior - Full Stack Developer - Furry - Aspiring Software Engineer</p>
                    <div className={styles.socials}>
                        <Social href="https://github.com/VulpoTheDev" icon="fab fa-github" />
                        <Social href="https://twitter.com/DeveloperVulpo" icon="fab fa-twitter" />
                        <Social href="https://discord.gg/SNV2N8p9aB" icon="fab fa-discord" />
                    </div>
                    <div className={styles.buttons}>
                        <button>Learn more about me</button>
                        <button>See my Artworks</button>
                        <button>Join My Discord</button>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <section className={styles.section}>
                    <h2>Who am I?</h2>
                    <p>
                        I{"'"}m a quirky fruity otter cunt
                    </p>
                </section>
                <section className={styles.section}>
                    <h2>My Projects</h2>
                    <div className={styles.projects}>
                        <Project
                            description={"Furry RPG Game"}
                            imageURL={"/images/Question.png"}
                            projectName={"FluffRPG"}
                            status={"Hold"}
                            projectLink={[]}
                        />
                        <Project
                            description={"Tinder but for finding friends"}
                            imageURL={"/images/Question.png"}
                            projectName={"Find a friend"}
                            status={"Hold"}
                            projectLink={[]}
                        />
                        <Project
                            description={"Don't ask just trust the flow"}
                            imageURL={"/images/Question.png"}
                            projectName={"BMM Tracker"}
                            status={"Hold"}
                            projectLink={[]}
                        />
                        <Project
                            description={"Discord Bot For FurDevs"}
                            imageURL={"/images/Fenix.png"}
                            projectName={"Fenix"}
                            status={"Hold"}
                            projectLink={[
                                {
                                    url: "https://github.com/FurDevs-Community/Fenix",
                                    icon: "fab fa-github",
                                },
                            ]}
                        />
                    </div>
                </section>
                <section className={styles.section}>
                    <h2>My Furry Dev Community</h2>
                    <div className={styles.furdevs}>
                        <div>
                            <div>
                                <h3>What is it?</h3>
                                <p>
                                    FurDevs is a Programming Community for Developers and Furries who are Interested in
                                    programming. No matter how experienced or part of the furry fandom or not you{"'"}re
                                    __everyone is welcomed!
                                </p>
                                <div>
                                    <ul>
                                        <li>
                                            Support with many Programming Languages Like Java, Python, JS/TS, C# and
                                            more{" "}
                                        </li>
                                        <li>
                                            Support in many Topics, like Game Development, Networking, OS, Hardware and
                                            more
                                        </li>
                                        <li>
                                            Learn Programming, learn how to make a Discord Bot, Website, Video Gameand
                                            more!
                                        </li>
                                        <li>
                                            Other Topics Outside of Programming such as Cryptocurrency/Stocks, The Furry
                                            Fandom and more!
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p>
                                    GitHub:{" "}
                                    <a href="https://github.com/FurDevs-Community">
                                        https://github.com/FurDevs-Community
                                    </a>
                                </p>
                                <p>
                                    Twitter: <a href="https://twitter.com/Fur_Devs">https://twitter.com/Fur_Devs</a>
                                </p>
                                <p>
                                    Discord: <a href="https://discord.gg/SNV2N8p9aB">https://discord.gg/SNV2N8p9aB</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2>Discord</h2>
                            <div>
                                <iframe
                                    src="https://discord.com/widget?id=731520035717251142&theme=dark"
                                    width="350"
                                    height="500"
                                    allowTransparency={true}
                                    frameBorder="0"
                                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <h2>Statistics</h2>
                    <div className={styles.stats}>
                        <img
                            src="https://camo.githubusercontent.com/ad77ea204e6909b098c09e999ac6995b4a595a97bb27b2230e9ca0e8ae03f0fa/68747470733a2f2f6769746875622d70726f66696c652d74726f7068792e76657263656c2e6170702f3f757365726e616d653d76756c706f746865646576"
                            alt=""
                        />
                        <div>
                            <img
                                src="https://camo.githubusercontent.com/ff6f3ba80d909609cf953609b75c70edc4a6c6ca430409d6ff50fd9bbc542e6a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d76756c706f7468656465762673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
                                alt=""
                            />
                            <img
                                src="https://camo.githubusercontent.com/ff6f3ba80d909609cf953609b75c70edc4a6c6ca430409d6ff50fd9bbc542e6a/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d76756c706f7468656465762673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://camo.githubusercontent.com/fc0bf23488778d95f7ad8aee0e9bf6152f75dbe8f978925b5de42dd1132fe42f/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d76756c706f74686564657626"
                                alt=""
                            />
                            <img src="https://github-readme-stats.vercel.app/api/wakatime?username=Vulpo" alt="" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
