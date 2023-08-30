import React from "react";
import projectLink from "../../images/project_link.svg";
export default function ProjectLink({ project }) {
	return (
		<div className="project-link__row">
			<div className="project-link__column">
				<img
					src={`${project.src}_desktop.jpg`}
					alt="Recent Projects"
					width="100%"
				/>
			</div>
			<div className="project-link__column pt-2">
				<p className="project-link__type">{project.type}</p>
			</div>
			<div className="project-link__column">
				<p className="project-link__name">{project.name}</p>
			</div>
			<div className="project-link__column pt-2">
				<a target='_blank' rel="noreferrer" href={project.url} className="project-link__logo">
					<img src={projectLink} alt="link logo" />
				</a>
			</div>
		</div>
	);
}
