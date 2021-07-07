import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Project from "../components/Project";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <div>
                    <h1>Hello there, I{"'"}m VulpoTheDev</h1>
                    <p>
                        Furry - Part Time Content Creator - Full Stack Developer
                    </p>
                    <div></div>
                </div>
                <div>
                    <Image
                        width={"250px"}
                        height={"250px"}
                        src="/images/vulpo.png"
                        alt="Vulpo's PFP"
                        className={`${styles.icon} fadeIn`}
                    />
                </div>
            </div>
            <section>
                <h2>Who am I?</h2>
                <p>
                    I{"'"}m a High School Student, that is 16 years old that
                    {"'"}s a Full Stack Web Developer that likes to make
                    Websites and Discord Bots. Dreaming in becoming a Software
                    Engineer one day at a Big Company like{" "}
                    <strong>Google</strong>, <strong>Microsoft</strong>, or even{" "}
                    <strong>Discord</strong>{" "}
                </p>
            </section>
            <section>
                <h2>My Projects</h2>
                <div className={styles.projects}>
                    <Project
                        description={
                            "General Purpose Discord Bot with Features that'll help you make your guild better!"
                        }
                        imageURL={"/images/Hozol.png"}
                        projectName={"Hozol"}
                        status={"Developing"}
                    />
                    <Project
                        description={
                            "A Discord Bot for FurDevs, a Furry/Dev Server"
                        }
                        imageURL={"/images/Fenix.png"}
                        projectName={"Fenix"}
                        status={"Developing"}
                    />
                    <Project
                        description={
                            "A place where you can Hire Freelancers or Become one"
                        }
                        imageURL={"/images/Question.png"}
                        projectName={"Freelance Zone"}
                        status={"Developing - Front End"}
                    />
                    <Project
                        description={
                            "A Gradebook where you can manage students Grade, Make reports and more!"
                        }
                        imageURL={"/images/Question.png"}
                        projectName={"Gradeflow"}
                        status={"Hold - Need Motivation"}
                    />
                </div>
            </section>
        </div>
    );
}
