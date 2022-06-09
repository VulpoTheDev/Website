import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard';

export default function Projects() {
  return (
    <ProjectCard
      projectName="Linux Stuff"
      description="A collection of linux scripts I use."
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png"
      link=""
      technologies={["bash-plain"]}
      type="Other"
      github='https://github.com/VulpoTheDev/linux-stuff'
    />
  );
}
