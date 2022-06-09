import Link from "next/link";
import React from "react";
import styles from "../../styles/ProjectCard.module.scss";

interface IProjectCardProps {
  projectName: string;
  description: string;
  github: string;
  image: string;
  link: string | null;
  technologies: string[];
  type:
    | "Discord Bot"
    | "Website"
    | "Website/Discord Bot"
    | "Application"
    | "Other";
}

export default function ProjectCard({
  description,
  image,
  link = null,
  github,
  technologies,
  projectName,
  type,
}: IProjectCardProps) {
  return (
    <div className={styles.project}>
      <div className={styles.projectHeader}>
        <div className={styles.information}>
          <div className={styles.projectTop}>
            <h2 className={styles.projectTitle}>{projectName}</h2>
            <div className={styles.technologies}>
              {technologies.map((technology, index) => (
                <i className={`devicon-${technology}`} key={index} />
              ))}
            </div>
          </div>
          <h3 className={styles.projectDescription}>{type}</h3>
          <p>{description}</p>
        </div>
      </div>
      <img src={image} alt={projectName} />
      <div className={styles.buttons}>
        <a target="_blank" href={github} rel="noopener noreferrer">
          <button>
            <i className="devicon-github-original" />
          </button>
        </a>
        <a target="_blank" href={link ? link : github} rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <button onClick={() => alert("Sorry got too lazy")}>Learn more</button>
      </div>
    </div>
  );
}
