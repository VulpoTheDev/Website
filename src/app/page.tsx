import Image from "next/image";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";
import { certificates, workExp, backend, design, frontend } from './data';
import ProjectCard from "./projects/ProjectCard";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Skills from "./components/Skills";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Social from "./components/Social";
import Button from "./components/Button";
import { FaX } from "react-icons/fa6";
import { Project } from "../../sanity.types";

const getProjects = async () => {
  const projects = await client.fetch(`*[_type == "project"]`, {});
  return projects;
};

export default async function Home() {
  const projects = await getProjects() as Project[];

  return (
    <div>
      <header className="bg-[url('/bgbanner.png')] bg-cover">
        <section className="flex flex-col items-center justify-center text-center py-16 md:py-32 px-6">
          <Image
            src="/jason.jpeg"
            alt="Picture of Jason holding a dog"
            width={128}
            height={128}
            className="rounded-full border-4 border-white md:w-64 md:h-64"
          />
          <div className="mt-4 md:mt-6">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">Jason Diaz Jimenez</h1>
            <p className="text-gray-300 text-sm md:text-xl max-w-[700px] mx-auto mt-2">
              University Student, Software Engineer & Cybersecurity Enthusiast
            </p>
            <div className="flex flex-wrap gap-4 mt-4 items-center justify-center">
              <Button page="/projects" label="View Projects" />
              <Button href="mailto:hello@jasondiaz.dev" label="Contact Me" />
            </div>
          </div>
        </section>
      </header>
      <main className="container mx-auto">
        <section className="px-4 md:px-32 mt-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                languages={project.languages || []}
                banner={project.banner ? imageUrlBuilder(client).image(project.banner).url() : null}
              />
            ))}
          </div>
        </section>

        <section className="my-12 md:my-24 py-6 md:py-12 px-4 md:px-32">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 dark:text-white">
            About Me
          </h2>
          <p className="text-base md:text-lg dark:text-gray-300 text-center max-w-[800px] mx-auto mb-8 md:mb-12">
            My name is Jason Diaz Jimenez. I'm a student at Western Governor University
            pursuing a Bachelors Degree in Software Engineering and a Masters Degree in Cybersecurity.
            I currently code websites and small applications for friends and businesses as a hobby.
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex flex-col gap-6 md:gap-12">
              <Skills skillsName="Frontend" langs={frontend} />
              <Skills skillsName="Backend" langs={backend} />
              <Skills skillsName="Design" langs={design} />
            </div>
            <div className="flex flex-col gap-6 md:gap-8 mt-8 lg:mt-0">
              <div className="p-4 md:p-6 border dark:border-white border-gray-700 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4">Certificates</h3>
                <div className="flex flex-wrap gap-4 justify-center w-full">
                  {certificates.map((cert, index) => (
                    <Image
                      key={index}
                      src={cert.img}
                      alt={cert.name}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
              <div className="p-4 md:p-6 border dark:border-white border-gray-700 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4">Work Experience</h3>
                <div className="flex flex-col gap-4">
                  {workExp.map((work, index) => (
                    <WorkExperience {...work} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 px-4 md:px-32 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Connect with me!</h2>
          <Button label="Send me a mail" href="mailto:ozzythedev@outlook.com" />
        </section>
      </main>
      <footer className="w-full bg-gray-900 py-8 md:py-12 px-4 md:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div>
            <h1 className="text-xl md:text-3xl font-bold text-white">Jason Diaz Jimenez</h1>
            <p className="text-sm md:text-lg text-gray-400">University Student, Software Engineer & Cybersecurity</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0 text-white">
            <Social icon={<FaLinkedin size={24} />} link="https://www.linkedin.com/in/jasonydiazjimenez/" />
            <Social icon={<FaGithub size={24} />} link="https://github.com/VulpoTheDev" />
            <Social icon={<FaX size={24} />} link="http://twitter.com/JYDiazJimenez" />
            <Social icon={<FaInstagram size={24} />} link="https://www.instagram.com/developer_vulpo/" />
          </div>
        </div>
      </footer>
    </div>
  );
}
