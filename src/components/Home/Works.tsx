import React from 'react'
import Image from 'next/image';
import styles from "../../styles/Working.module.scss";

interface IProps {
    workName: string;
    workTitle: string;
    workDuration: string;
    workLogo: string;
}

export default function Works({ workDuration, workLogo, workName, workTitle } : IProps) {
  return (
    <div>
        <h3>{workName}</h3>
				<div className={styles.imageWrapper}>
        <Image src={workLogo} alt={`${workName}'s Logo`} layout="fill" objectFit="contain" loading="lazy" />
				</div>
        <h4>{workTitle}</h4>
        <p>{workDuration}</p>
    </div>
  )
}
