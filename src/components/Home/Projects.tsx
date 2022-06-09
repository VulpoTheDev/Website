import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import styles from "../../styles/Projects.module.scss";
import { recentProjects } from "../../utils/constant";
import Container from "../Layout/Container";
export default function Projects() {
  return (
    <Container>
      <div className={styles.projects}>
        <h2>Recent Projects</h2>
        <p>Only my open source project will be displayed</p>
        <div className={styles.projectsList}>
          {recentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              github={project.github}
              projectName={project.projectName}
              description={project.description}
              image={project.image}
              link={project.link}
              technologies={project.technologies}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
