/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Skills from '../../Skills/Skills';
import styles from './Skills.module.scss'
import config from '../../../config/skills.json'

export default function SkillsSection() {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.mySkills}>
        <img className={styles.ozzyImg} src="/images/diamond.png" />
        <div className={styles.skillset}>
          <Skills skillsName="Frontend" langs={config.frontend} />
          <Skills skillsName="Backend" langs={config.backend} />
          <Skills skillsName="Design" langs={config.design} />
        </div>
      </div>
    </div>
  );
}
