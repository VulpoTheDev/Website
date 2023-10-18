/* eslint-disable @next/next/no-async-client-component */
"use client";

import { useRouter } from "next/navigation";
import ProjectCard from "./ProjectCard";
import { client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

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
  const projects = await getProjects();
  return (
    <div className="w-11/12 mx-auto mt-8 ">
      <div className="mx-auto py-4">
        <h1 className="text-3xl font-semibold mb-4">Projects</h1>
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
      </div>
      <button
        onClick={() => router.push("/")}
        className="bg-pink-500 px-5 py-3"
      >
        Head back home
      </button>
    </div>
  );
}
