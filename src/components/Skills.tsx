import React from "react";
import styles from '../styles/Skills.module.scss'

export interface ISkillsProps {
  skill: string;
  years: string;
  description: string;
  icon: string;
}

export const Skill = ({ icon, description, skill, years }: ISkillsProps) => {
  return (
    <div className={styles.skill}>
      <span className={`${icon} fa-fw`} />
      <div className={styles.skillInfo}>
        <h1>{skill}</h1>
        <h2>{years}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
