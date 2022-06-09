/* eslint-disable @next/next/no-img-element */
import React from 'react'

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
        <img src={workLogo} alt={`${workName}'s Logo`} />
        <h4>{workTitle}</h4>
        <p>{workDuration}</p>
    </div>
  )
}
