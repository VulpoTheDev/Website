import Image from "next/image";
import WorkExperience from "./components/WorkExperience";
import {
  certificates,
  workExp,
  languages,
  webApis,
  tooling,
} from "./data";
import ProjectCard from "./projects/ProjectCard";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Skills from "./components/Skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Social from "./components/Social";
import Button from "./components/Button";
import { Project } from "../../sanity.types";

const getProjects = async () => {
  const projects = await client.fetch(`*[_type == "project"]`, {});
  return projects;
};

export default async function Home() {
  const projects = (await getProjects()) as Project[];

  return (
    <div>
      <header className="relative min-h-[62vh] overflow-hidden bg-[url('/bgbanner.png')] bg-cover bg-center">
        <div
          className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/75 to-bg"
          aria-hidden
        />
        <section className="relative mx-auto flex min-h-[62vh] max-w-6xl flex-col items-center justify-center px-6 py-16 text-center md:py-20">
          <Image
            src="/jason.jpeg"
            alt="Jason Diaz Jimenez"
            width={128}
            height={128}
            className="mb-6 h-28 w-28 rounded-full border-2 border-line object-cover md:mb-8 md:h-32 md:w-32"
            priority
          />
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent md:text-sm">
            Software Engineer · Cybersecurity
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink text-balance md:text-6xl">
            Jason Diaz Jimenez
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-xl text-balance">
            Building secure software systems. B.S. in Software Engineering,
            Western Governors University.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8">
            <Button href="/resume.pdf" label="View Resume" variant="primary" />
            <Button href="mailto:hello@jasondiaz.dev" label="Get in touch" />
            <Button page="/projects" label="View projects" outline />
          </div>
        </section>
      </header>

      <main className="mx-auto max-w-6xl px-4 md:px-8">
        <section className="py-16 md:py-24">
          <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Selected work
          </p>
          <h2 className="mb-10 text-center font-display text-3xl font-bold tracking-tight md:mb-14 md:text-4xl">
            Featured projects
          </h2>
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project._id || index}
                title={project.title}
                description={project.description}
                languages={project.languages || []}
                banner={
                  project.banner
                    ? imageUrlBuilder(client).image(project.banner).url()
                    : null
                }
                github={project.github}
                website={project.website}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-line py-16 md:py-24">
          <p className="mb-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Background
          </p>
          <h2 className="mb-6 text-center font-display text-3xl font-bold tracking-tight md:text-4xl">
            About
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base text-muted md:mb-16 md:text-lg text-balance">
            I&apos;m Jason Diaz Jimenez, a software engineer focused on full-stack
            development and security fundamentals. I hold a Bachelor&apos;s in Software
            Engineering from Western Governors University, with CompTIA A+,
            Network+, Security+, CySA+, and AWS Cloud Practitioner among my
            credentials. I build production-minded web applications and small
            systems for clients and personal projects.
          </p>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col gap-8">
              <Skills skillsName="Languages & platforms" langs={languages} />
              <Skills skillsName="Web & APIs" langs={webApis} />
              <Skills skillsName="Tooling & cloud" langs={tooling} />
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-lg border border-line bg-surface p-5 md:p-6">
                <h3 className="mb-6 text-center font-display text-xl font-bold md:text-2xl">
                  Certifications
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
                        <Image
                          src={cert.img}
                          alt={cert.name}
                          width={96}
                          height={96}
                          className="max-h-full max-w-full object-contain"
                          title={cert.name}
                        />
                      </div>
                      <span className="text-[11px] font-medium leading-tight text-muted sm:text-xs">
                        {cert.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-line bg-surface p-5 md:p-6">
                <h3 className="mb-6 text-center font-display text-xl font-bold md:text-2xl">
                  Experience
                </h3>
                <div className="flex flex-col gap-6">
                  {workExp.map((work) => (
                    <WorkExperience {...work} key={work.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-16 text-center md:py-24">
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Contact
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mx-auto mb-8 max-w-md text-muted">
            Open to software engineering and cybersecurity roles.
          </p>
          <Button
            label="Email me"
            href="mailto:hello@jasondiaz.dev"
            variant="primary"
          />
        </section>
      </main>

      <footer className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <h1 className="font-display text-xl font-bold text-ink md:text-2xl">
              Jason Diaz Jimenez
            </h1>
            <p className="mt-1 text-sm text-muted md:text-base">
              Software Engineer · Cybersecurity
            </p>
          </div>
          <div className="flex gap-5">
            <Social
              icon={<FaLinkedin size={22} />}
              link="https://www.linkedin.com/in/jasonydiazjimenez/"
              label="LinkedIn"
            />
            <Social
              icon={<FaGithub size={22} />}
              link="https://github.com/VulpoTheDev"
              label="GitHub"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
