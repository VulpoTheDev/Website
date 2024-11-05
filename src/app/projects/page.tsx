'use client';

import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Button from "../components/Button";
import { Project } from "../../../sanity.types";

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

export default async function Projects() {
  const router = useRouter();
  const projects = await getProjects() as Project[];
  return (
    <div className="w-11/12 mx-auto mt-8 text-center container">
      <div className="mx-auto py-8">
        <div className="flex flex-col items-center justify-center my-4 spac space-y-4 text-center pb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            My Projects
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A showcase of my work in software engineering and cybersecurity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              languages={project.languages || []}
              website={project.website}
              github={project.github}
              banner={project.banner ? imageUrlBuilder(client).image(project.banner).url() : null}
            />
          ))}
        </div>
      </div>
      <Button page="/" label="Head back home" />
    </div>
  );
}
