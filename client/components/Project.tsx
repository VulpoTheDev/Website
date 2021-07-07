/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";
import styles from "./../styles/Projects.module.scss";
import Image from "next/image";

interface Props {
    projectName: string;
    imageURL: string;
    description: string;
    status: string;
    projectLink?: {
        url: string;
        icon: string;
    }[];
}

export default function Project({
    description,
    imageURL,
    projectName,
    status,
    projectLink,
}: Props): ReactElement {
    return (
        <div className={styles.project}>
            <h3>{projectName}</h3>
            <img src={imageURL} alt={`{projectName}'s Icon`} />
            <h4>Project Status: {status}</h4>
            <p>{description}</p>

            {projectLink ? (
                <div>
                    {projectLink.map((project) => (
                        <a href={project.url} key={1}>
                            <i className={`${project.icon}`}></i>
                        </a>
                    ))}{" "}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
