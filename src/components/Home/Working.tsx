import React from "react";
import Works from "./Works";
import styles from "../../styles/Working.module.scss";
import { works } from "../../utils/constant";

type Props = {};

export default function Working({}: Props) {
  return (
    <div className={styles.working}>
      <h2 style={{ textAlign: "center" }}>Who I Work with?</h2>
      <div className={styles.marquee}>
        <Workings />
        <Workings />
      </div>
    </div>
  );
}

const Workings = () => {
  return (
    <div className={styles.list}>
      {works.map((work, index) => (
        <Works
          key={index}
          workDuration={work.workDuration}
          workLogo={work.workLogo}
          workName={work.workName}
          workTitle={work.workTitle}
        />
      ))}
    </div>
  );
};
