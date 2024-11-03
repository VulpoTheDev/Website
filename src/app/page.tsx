import Image from "next/image";
import Navbar from "./components/Navbar";
import WorkExperience from "./components/WorkExperience";
import { certificates, workExp, backend, design, frontend } from './data'
import ProjectCard from "./projects/ProjectCard";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Skills from "./components/Skills";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Social from "./components/Social";
import Button from "./components/Button";
import { FaX } from "react-icons/fa6";

const getProjects = async (): Promise<
  {
    title: string;
    description: string;
    languages: string[];
    banner?: any;
  }[]
> => {
  const projects = await client.fetch(`*[_type == "project"]`, {});
  return projects;
};

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <header className="bg-[url('/bgbanner.png')] bg-cover">
        <section className="flex flex-col items-center justify-center text-center py-32">
          <img src="/jason.jpeg" alt="Picture of Jason holding a dog" className="w-1/5 h-1/5 rounded" />
          <div className="my-4">
            <h1 className="text-5xl font-bold">Jason Diaz Jimenez</h1>
            <p className="text-2xl">University Student, Software Engineer & Cybersecurity</p>
            <div className="flex-row flex gap-x-4 my-3 items-center justify-center">
              <Button page="/projects" label="Projects" />
              <Button href="mailto:ozzythedev@outlook.com" label="Contact" />
            </div>
          </div>
        </section>
      </header>
      <section className="py-52 px-32 flex flex-col">
        <h2 className="text-4xl font-bold text-center mb-12">About me</h2>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col w-full">
            <p className="text-2xl">My name is Jason Diaz Jimenez. I'm a student at Western Governor University studing for my Bachelors Degree in Software Engineering and Masters Degree in Cybersecurity. I currently code websites, and small applications for friends and buisnesses (free of charge) as a hobby</p>
            <Skills skillsName="Frontend" langs={frontend} />
            <Skills skillsName="Backend" langs={backend} />
          </div>
          <div className="w-1/3 flex flex-col text-center gap-y-5">
            <div className="p-4 border-white border ">
              <h3 className="text-2xl font-bold">Certificates</h3>
              <div className="flex flex-row flex-wrap gap-x-3 mt-3">
                {certificates.map((cert, index) => (
                  <img className="w-1/4" src={cert.img} alt={cert.name} key={index} />
                ))}

              </div>
            </div>
            <div className="p-4 border-white border-2 rounded">
              <h3 className="text-2xl font-bold">Work Experience</h3>
              <div className="flex flex-col gap-3 mt-3">
                {workExp.map((work, index) => (
                  <WorkExperience {...work} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-52 px-32 flex flex-col">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              languages={project.languages}
              banner={project.banner ? imageUrlBuilder(client).image(project.banner).url() : null}
            />
          ))}
        </div>
      </section>
      <section className="py-52 px-32 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12">Connect with me!</h2>
        <Button label="Send me a mail" href="mailto:ozzythedev@outlook.com" />
      </section>
      <footer className="w-full bg-white/5">
        <div className="py-24 px-32 flex flex-row items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Jason Diaz Jimenez</h1>
            <p className="text-xl">University Student, Software Engineer & Cybersecurity</p>
          </div>
          <div className="flex flex-row gap-x-4">
            <Social icon={<FaLinkedin size={32} />} link={'https://www.linkedin.com/in/jasonydiazjimenez/'} />
            <Social icon={<FaGithub size={32} />} link={'https://github.com/VulpoTheDev'} />
            <Social icon={<FaX size={32} />} link={'http://twitter.com/JYDiazJimenez'} />
            <Social icon={<FaInstagram size={32} />} link={'https://www.instagram.com/developer_vulpo/'} />
          </div>
        </div>
      </footer>
    </div>
  );
}