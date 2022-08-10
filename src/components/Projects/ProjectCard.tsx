import Link from "next/link";
import Image from "next/image";
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
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={projectName}
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <div className={styles.buttons}>
        <Link href={github} target="_blank" rel="noopener noreferrer" passHref>
          <a>
            <button>
              <i className="devicon-github-original" />
            </button>
          </a>
        </Link>
        <Link
          href={link ? link : github}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <button>View Project</button>
        </Link>
        <button onClick={() => alert("Sorry got too lazy")}>Learn more</button>
      </div>
    </div>
  );
}
