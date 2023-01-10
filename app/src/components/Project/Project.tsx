import React from "react";
import styles from "./Project.module.scss";

export interface IProjectProps {
  projectImage: string;
  projectTags: string[];
  projectName: string;
  projectDescription: string;
  githubLink?: string;
  projectLink?: string;
}

export default function Project({
  projectDescription,
  projectImage,
  projectName,
  projectTags,
  githubLink,
  projectLink
}: IProjectProps) {
  return (
    <div
      className={styles.project}
      style={{ backgroundImage: `url(${projectImage})` }}
    >
      <div className={styles.info}>
        <div className={styles.tags}>
          {projectTags.map((tag, index) => (
            <span className={styles.tag} key={index}>
              {tag}
            </span>
          ))}
        </div>
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <div className={styles.buttons}>
          {projectLink && <button>Visit Project</button>}
          {githubLink && <button>GitHub</button>}
        </div>
      </div>
    </div>
  );
}
