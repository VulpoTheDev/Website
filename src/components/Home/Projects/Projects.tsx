import React from 'react'
import styles from './Projects.module.scss'
import Project from '../../Project/Project'
import { projects as projectsList } from '../../../config/projects'

export default function Projects() {
  return (
    <div className={styles.projectSection}>
      <h2>My Projects</h2>
      <div className={styles.projects}>
        {projectsList.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </div>
  );
}
