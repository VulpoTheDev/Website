import React, {useEffect, useState} from 'react'
import ProjectCard from '../../components/Projects/ProjectCard';
import Container from "../../components/Layout/Container";
import styles from "../../styles/Projects.module.scss";

export default function Projects() {
	const [projects, setProjects] = useState<| null
			| {
		title: string;
		content: string;
		banner: string;
		blogID: string;
		date: Date;
	}[]>(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const blogs = fetch("/api/projects/fetch").then((res) => {
			res.json().then((data) => {
				if (data.message) {
					console.log(data.message);
					setProjects(null);
					setLoading(true);
					return;
				} else {
					setProjects(data);
					setLoading(false);
				}
			});
		});
	}, []);
	return (
			<Container>
				<div className={styles.section}>
					<h2>January 2022</h2>
					{projects !== null && !loading ? (
							projects.map((project) => {
								{
									console.log(project)
								}
								return <ProjectCard github={project.date.toString()} technologies={[]} type={"Website"}
																		description={project.content.slice(0, 20)} image={project.banner}
																		link={`/projects/${project.blogID}`} projectName={project.title}  />
							})
					) : (
							<h1>Loading...</h1>
					)}
				</div>
			</Container>
	);
}
