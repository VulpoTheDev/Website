/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from '../Skills/Skills.module.scss'

interface ISkillsProp {
  skillsName: string;
  langs: string[];
}

export default function Skills({ langs, skillsName }: ISkillsProp) {
  return (
    <div className={styles.skills}>
      <h2>{skillsName}</h2>
      <img
        src={`https://skillicons.dev/icons?i=${langs.join(",")}`}
        alt={skillsName}
      />
    </div>
  );
}
