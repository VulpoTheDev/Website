import ProjectCard from "./ProjectCard";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Button from "../components/Button";
import { Project } from "../../../sanity.types";

export const metadata = {
  title: "Projects",
  description:
    "Software engineering and security-minded projects by Jason Diaz Jimenez.",
};

const getProjects = async () => {
  const projects = await client.fetch(`*[_type == "project"]`, {});
  return projects as Project[];
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <div className="mb-12 text-center md:mb-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Portfolio
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Projects
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-xl text-balance">
          Selected software engineering work spanning full-stack web,
          systems tooling, and security-adjacent builds.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      <div className="mt-12 flex justify-center">
        <Button page="/" label="Back to home" outline />
      </div>
    </div>
  );
}
