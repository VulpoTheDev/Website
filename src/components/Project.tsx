/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Project.module.scss";

export interface IProjectProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
}

export default function Project({
  description,
  image,
  github,
  link,
  title,
}: IProjectProps) {
  return (
    <div className={styles.project}>
      <div>
        <img className={styles.projectIcon} src={image} alt={`${title}'s icon`} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );
}
