import React from "react";
import GradientTitle from "../../componnents/gradientTitle";
import ProjectLink from "./projectLink";

import circleLogo from "../../images/circle_logo.svg";
import { useState } from "react";

const Projects = () => {
	let projects = [
		{
			url: "https://upnup.ch/",
			name: "Fox Deal",
			type: "UX/UI Desing",
			src: "images/foxDeal",
		},
		{
			url: "https://upnup.ch/",
			name: "Spayce",
			type: "Branding",
			src: "images/spayce",
		},

		{
			url: "https://upnup.ch/",
			name: "Stay Human",
			type: "VR & AR",
			src: "images/stayhuman",
		},
		{
			url: "https://upnup.ch/",
			name: "Upnup Coin",
			type: "Marketing",
			src: "images/coin",
		},
	];

	const defalutNumOfProjects = 2;
	const step = 2;
	const [projectsToShow, setProjectsToShow] = useState([
		...projects.slice(0, defalutNumOfProjects),
	]);

	return (
		<div className="projects-container h-padding">
			<div className="projects__main-row">
				<div className="projects__main-column">
					<GradientTitle title="PROJECTS"></GradientTitle>
				</div>
				<div className="projects__main-column pt-3">
					<h1 className="projects__main-title">
						Our treasure trove of selected Web3 Projects
					</h1>
				</div>
				<div className="projects__main-column pt-3">
					<p className="projects__main-text">
						Spotlighting work that shows different facets of our capabilities,
						design imagination, marketing, coding skills, consulting and
						branding magic.
					</p>
				</div>
				<div className="projects__main-column">
					<div className="projects__main-logo">
						<img src={circleLogo} alt="a circular logo" />
					</div>
				</div>
			</div>
			<div className="projects__grid-row">
				<div className="projects__grid-column projects__main-grid">
					{projectsToShow.map((project) => (
						<ProjectLink project={project} key={project.name}></ProjectLink>
					))}
				</div>
			</div>
			{
				<div className="projects__button-row">
					<div className="projects__button-column">
						{projectsToShow.length < projects.length ? (
							<button
								className="projects__button-btn"
								type="button"
								onClick={() =>
									setProjectsToShow((prevState) => {
										return projects.slice(0, prevState.length + step);
									})
								}
							>
								Show More Projects
							</button>
						) : (
							<button
								className="projects__button-btn"
								type="button"
								onClick={() =>
									setProjectsToShow(projects.slice(0, defalutNumOfProjects))
								}
							>
								Show Less Projects
							</button>
						)}
					</div>
				</div>
			}
		</div>
	);
};

export default Projects;
